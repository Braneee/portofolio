export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "flutter-riverpod-best-practices",
    title: "Flutter State Management: Riverpod Best Practices for Production Apps",
    date: "July 12, 2026",
    excerpt: "Explore how to structure Riverpod providers, avoid common memory leaks, and architect clean state layers in enterprise Flutter applications.",
    readTime: "6 min read",
    tags: ["Flutter", "Riverpod", "Architecture"],
    content: `### Why Riverpod?
In modern Flutter development, managing state cleanly is one of the most critical design decisions. While **Provider** has served the community well, **Riverpod** addresses several design flaws of Provider, including safety, compile-time validation, and ease of testability.

In this article, we outline best practices for structuring your application state using Riverpod.

---

### 1. Maintain a Unidirectional Data Flow
State should only flow one way. Your UI should listen to providers, and interactions should trigger method calls on the Notifier. Avoid modifying state directly from the UI widgets.

\`\`\`dart
// Bad
ref.read(todoListProvider.notifier).state.add(newTodo);

// Good
ref.read(todoListProvider.notifier).addTodo(newTodo);
\`\`\`

---

### 2. Prefer AsyncNotifier for Asynchronous States
When loading data from a repository or API, use \`AsyncNotifierProvider\` instead of managing custom loading/error states manually. It integrates perfectly with Flutter's \`AsyncValue\`, giving you built-in loading and error mapping.

\`\`\`dart
class ProfileNotifier extends AsyncNotifier<UserProfile> {
  @override
  Future<UserProfile> build() async {
    return ref.watch(userRepositoryProvider).fetchProfile();
  }
}
\`\`\`

---

### 3. Keep Providers Small and Focused
Instead of creating a giant state notifier that handles everything in a screen, split your states into separate, small providers. You can easily combine them using \`ref.watch()\`.
`
  },
  {
    slug: "supabase-row-level-security-mobile",
    title: "Securing Mobile App Backends with Supabase Row Level Security (RLS)",
    date: "June 28, 2026",
    excerpt: "Learn how to write secure PostgreSQL RLS policies that restrict user read/write access to their own data in Supabase-backed mobile apps.",
    readTime: "5 min read",
    tags: ["Supabase", "PostgreSQL", "Security"],
    content: `### Introduction to RLS
When developing a mobile application, accessing a database directly from the client is convenient. However, if your API keys are embedded in the binary (even as anonymous keys), anyone can intercept requests and write queries to your tables.

**Row Level Security (RLS)** is the answer. It enables PostgreSQL to validate user permissions directly at the database level.

---

### Basic RLS Policy Pattern
To enable RLS in Supabase, you must first toggle RLS on your table:

\`\`\`sql
alter table public.todos enable row level security;
\`\`\`

Then, you can write policies that utilize \`auth.uid()\` to verify if the requesting user owns the row:

\`\`\`sql
create policy "Users can modify their own todos"
  on public.todos
  for all
  using (auth.uid() = user_id);
\`\`\`

---

### Advanced Kader Access Check
In a healthcare app like **STPI Mobile**, we want only active kader (volunteers) to submit screenings. We can join roles from our profiles table:

\`\`\`sql
create policy "Kaders can create screening results"
  on public.screening_results
  for insert
  with check (
    auth.uid() in (
      select user_id from public.kaders
      where status = 'aktif'
    )
  );
\`\`\`
`
  },
  {
    slug: "offline-first-mobile-architecture",
    title: "Architecting Offline-First Mobile Apps with Hive and SQLite",
    date: "May 15, 2026",
    excerpt: "A deep dive into local caching strategies, synchronization queues, and conflicts handling when building mobile apps that work in remote areas.",
    readTime: "8 min read",
    tags: ["Mobile", "Flutter", "Hive", "SQLite"],
    content: `### The Importance of Offline Capability
Many mobile developers assume constant high-speed internet. However, users in transit, remote villages, or underground stations frequently experience disconnects. A premium app should work seamlessly offline.

---

### Hive vs. SQLite: Which to Choose?
* **Hive**: Excellent for document/JSON-like structures, fast read/write, simple setup, fully written in Dart. Great for configurations, caches, and key-value lists.
* **SQLite (sqflite)**: Best for complex relational data, transactions, and heavy aggregations. Great for accounting/POS apps like **WarungKu**.

---

### The Queue Synchronization Model
To sync offline data to the cloud, use a queue-based synchronization manager:
1. Save transaction in a local queue table with a \`sync_status = 'pending'\` flag.
2. Listen to connectivity state changes.
3. When online, trigger a background worker that fetches all 'pending' records, sends them to the server, and updates the state to \`'synced'\`.
4. Handle conflicts gracefully (e.g., using "last write wins" or prompting the user).
`
  }
];
