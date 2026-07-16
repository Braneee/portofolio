"use client";

import { notFound, useParams } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    
    let currentList: { type: "ul" | "ol"; items: string[] } | null = null;
    let inCodeBlock = false;
    let codeLines: string[] = [];

    const flushList = (key: string | number) => {
      if (!currentList) return;
      const ListTag = currentList.type;
      elements.push(
        <ListTag key={key} className={`pl-6 my-4 space-y-2 font-sans text-sm text-text-secondary ${currentList.type === "ul" ? "list-disc" : "list-decimal"}`}>
          {currentList.items.map((item, idx) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={idx}>
                {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-text-primary">{part}</strong> : part)}
              </li>
            );
          })}
        </ListTag>
      );
      currentList = null;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Handle Code Block
      if (trimmed.startsWith("```")) {
        if (inCodeBlock) {
          const language = codeLines[0] || "code";
          const codeText = codeLines.slice(1).join("\n");
          elements.push(
            <pre key={`code-${i}`} className="bg-bg-subtle border border-border rounded-lg p-4 my-6 font-mono text-xs overflow-x-auto text-text-secondary">
              <div className="flex justify-between items-center text-text-tertiary mb-2 uppercase text-[10px] tracking-wider border-b border-border/50 pb-1">
                <span>{language}</span>
              </div>
              <code>{codeText}</code>
            </pre>
          );
          codeLines = [];
          inCodeBlock = false;
        } else {
          flushList(`list-${i}`);
          const lang = trimmed.replace("```", "").trim() || "code";
          codeLines = [lang];
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // Empty line
      if (trimmed === "") {
        flushList(`list-${i}`);
        continue;
      }

      // Divider
      if (trimmed === "---") {
        flushList(`list-${i}`);
        elements.push(<hr key={`hr-${i}`} className="border-t border-border/60 my-6" />);
        continue;
      }

      // Headers
      if (trimmed.startsWith("### ")) {
        flushList(`list-${i}`);
        elements.push(
          <h3 key={`h3-${i}`} className="font-sans text-xl font-bold text-text-primary mt-8 mb-4 border-b border-border pb-2">
            {trimmed.replace("### ", "")}
          </h3>
        );
        continue;
      }

      if (trimmed.startsWith("## ")) {
        flushList(`list-${i}`);
        elements.push(
          <h2 key={`h2-${i}`} className="font-sans text-2xl font-bold text-text-primary mt-10 mb-5 border-b border-border pb-2">
            {trimmed.replace("## ", "")}
          </h2>
        );
        continue;
      }

      // Unordered list items
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const itemContent = trimmed.replace(/^[*+-]\s+/, "");
        if (currentList && currentList.type === "ul") {
          currentList.items.push(itemContent);
        } else {
          flushList(`list-${i}`);
          currentList = { type: "ul", items: [itemContent] };
        }
        continue;
      }

      // Ordered list items
      if (/^\d+\.\s/.test(trimmed)) {
        const itemContent = trimmed.replace(/^\d+\.\s+/, "");
        if (currentList && currentList.type === "ol") {
          currentList.items.push(itemContent);
        } else {
          flushList(`list-${i}`);
          currentList = { type: "ol", items: [itemContent] };
        }
        continue;
      }

      // Normal paragraph
      flushList(`list-${i}`);
      const parts = trimmed.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={`p-${i}`} className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
          {parts.map((part, idx) => idx % 2 === 1 ? <strong key={idx} className="font-semibold text-text-primary">{part}</strong> : part)}
        </p>
      );
    }

    flushList("list-final");
    return elements;
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Back navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-text-tertiary hover:text-primary-500 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="border-b border-border pb-8 mb-10">
        <div className="flex items-center gap-4 text-xs text-text-tertiary mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="font-sans text-3xl font-extrabold text-text-primary sm:text-4xl md:text-5xl leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>
      </article>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        {renderMarkdown(post.content)}
      </div>
    </div>
  );
}
