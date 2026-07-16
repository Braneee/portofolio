"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blog";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="font-sans text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Technical Writing & Insights
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-text-secondary">
          Writing about mobile application architecture, Flutter state management, backend design patterns, and database security.
        </p>
      </div>

      {/* Search & Tags panels */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 pb-6 border-b border-border">
        {/* Search */}
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-border bg-surface text-text-primary placeholder-text-tertiary focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-md px-3 py-1 text-xs font-semibold border transition-all duration-200 ${
              selectedTag === null
                ? "bg-primary-500 text-white border-primary-500"
                : "bg-surface border-border text-text-secondary hover:bg-bg-subtle"
            }`}
          >
            All Tags
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-md px-3 py-1 text-xs font-semibold border transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-primary-500 text-white border-primary-500"
                  : "bg-surface border-border text-text-secondary hover:bg-bg-subtle"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles list */}
      <div className="flex flex-col gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.slug} className="group bg-surface border border-border hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              {/* Meta details */}
              <div className="flex items-center gap-4 text-xs text-text-tertiary">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Title */}
            <h2 className="font-sans text-xl font-bold text-text-primary group-hover:text-primary-500 transition-colors duration-200 leading-snug">
              {post.title}
            </h2>
            <p className="font-sans text-sm text-text-secondary mt-3 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-5 flex items-center justify-end border-t border-border pt-4">
              <Link href={`/blog/${post.slug}`} className="group/link flex items-center gap-1 font-sans text-xs font-bold text-primary-500 hover:text-primary-700 transition-colors cursor-pointer">
                <span>Read Full Article</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="font-sans text-base text-text-tertiary">No articles found matching search criteria.</p>
        </div>
      )}
    </div>
  );
}
