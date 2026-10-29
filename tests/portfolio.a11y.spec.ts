import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function expectNoAccessibilityViolations(page: Page) {
  const results = await new AxeBuilder({ page }).analyze();
  const violations = results.violations.map((violation) => ({
    rule: violation.id,
    impact: violation.impact,
    elements: violation.nodes.map((node) => node.target.join(" ")),
  }));

  expect(violations).toEqual([]);
}

for (const [name, path] of [
  ["beranda", "/"],
  ["arsip proyek", "/projects"],
  ["detail proyek", "/projects/stpi-mobile"],
  ["CV", "/resume"],
  ["blog", "/blog"],
  ["artikel blog", "/blog/flutter-riverpod-best-practices"],
  ["kontak", "/contact"],
] as const) {
  test(`${name} bebas pelanggaran axe`, async ({ page }) => {
    await page.goto(path);
    if (name === "beranda") {
      await page
        .locator(".hero-copy > :last-child")
        .evaluate(async (element) => {
          await Promise.all(
            element.getAnimations().map((animation) => animation.finished),
          );
        });
    }
    await expectNoAccessibilityViolations(page);
  });
}

test("filter proyek dan kondisi tanpa hasil bebas pelanggaran axe", async ({
  page,
}) => {
  await page.goto("/projects");
  await page.getByRole("button", { name: "Backend" }).click();
  await page.getByLabel("TEKNOLOGI").selectOption("Flutter");
  await expect(page.getByRole("status")).toContainText("0 dari 7 proyek");
  await expectNoAccessibilityViolations(page);
});

test("tautan lewati konten dan filter dapat digunakan dengan keyboard", async ({
  page,
}) => {
  await page.goto("/projects");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Lewati ke konten" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Semua", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toContainText("2 dari 7 proyek");
});

test("seluruh kartu proyek tetap dapat dibuka", async ({ page }) => {
  await page.goto("/projects");
  const image = await page
    .locator(".project-card .project-image")
    .first()
    .boundingBox();
  if (!image) throw new Error("Gambar kartu proyek tidak terlihat");
  await page.mouse.click(image.x + 20, image.y + 20);
  await expect(page).toHaveURL(/\/projects\/stpi-mobile$/);
});

test("formulir kontak menyiapkan draf tanpa mengklaim pesan terkirim", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Nama" }).fill("Pengunjung Contoh");
  await page.getByRole("textbox", { name: "Email" }).fill("contoh@example.com");
  await page.getByRole("textbox", { name: "Subjek" }).fill("Diskusi proyek");
  await page
    .getByRole("textbox", { name: "Pesan" })
    .fill("Halo, mari berdiskusi.");
  await page.getByRole("button", { name: "Siapkan email" }).click();

  await expect(page.getByRole("status")).toContainText("Pesan belum terkirim");
  const draft = page.getByRole("link", { name: "Buka aplikasi email" });
  const href = await draft.getAttribute("href");
  expect(href).toContain("mailto:raishilmy0@gmail.com?");
  expect(decodeURIComponent(href ?? "")).toContain("Halo, mari berdiskusi.");
  await expectNoAccessibilityViolations(page);

  await page.getByRole("textbox", { name: "Subjek" }).fill("Subjek baru");
  await expect(draft).toHaveCount(0);
});

test("animasi beranda aktif dan bagian muncul saat digulir", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");

  const stripAnimation = await page
    .locator(".skill-strip-track")
    .evaluate((element) => getComputedStyle(element).animationName);
  expect(stripAnimation).toBe("home-strip-scroll");

  const lanyardAnimation = await page
    .locator(".lanyard-card")
    .evaluate((element) => getComputedStyle(element).animationName);
  expect(lanyardAnimation).toBe("home-lanyard-sway");

  const heading = page.locator("#karya .section-heading");
  await heading.scrollIntoViewIfNeeded();
  await expect(heading).toHaveAttribute("data-motion-visible", "");
});

test("preferensi reduced motion menonaktifkan animasi beranda", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const stripAnimation = await page
    .locator(".skill-strip-track")
    .evaluate((element) => getComputedStyle(element).animationName);
  expect(stripAnimation).toBe("none");
  await expect(page.locator("#karya .section-heading")).not.toHaveAttribute(
    "data-motion-pending",
  );
});
