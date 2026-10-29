"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm({ recipient }: { recipient: string }) {
  const [draftHref, setDraftHref] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setError("Lengkapi semua kolom sebelum menyiapkan email.");
      setDraftHref(null);
      return;
    }

    const body = `Halo Gibran,\n\n${message}\n\nSalam,\n${name}\n${email}`;
    setDraftHref(
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
    setError(null);
  }

  function clearDraft() {
    setDraftHref(null);
    setError(null);
  }

  return (
    <form
      className="contact-form"
      onSubmit={prepareEmail}
      onChange={clearDraft}
    >
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="contact-name">Nama</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Nama Anda"
            maxLength={100}
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nama@email.com"
            maxLength={254}
            required
          />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="contact-subject">Subjek</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Tentang proyek atau kolaborasi"
          maxLength={120}
          required
        />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Pesan</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Ceritakan kebutuhan Anda secara singkat..."
          maxLength={1500}
          required
        />
      </div>
      {error && (
        <p className="contact-error" role="alert">
          {error}
        </p>
      )}
      <button className="pill-button dark-button contact-prepare" type="submit">
        Siapkan email ↗
      </button>
      {draftHref && (
        <div className="contact-draft" role="status">
          <p>Draf siap. Pesan belum terkirim.</p>
          <a href={draftHref}>Buka aplikasi email ↗</a>
          <span>
            Periksa isi draf, lalu tekan Kirim di aplikasi email Anda.
          </span>
        </div>
      )}
    </form>
  );
}
