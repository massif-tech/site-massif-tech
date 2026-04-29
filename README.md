# site-massif-tech

Static GitHub Pages site for **Massif Tech** — live at [massiftech.llc](https://massiftech.llc/).

## Files

| File | Purpose |
|---|---|
| `index.html` | Single-page site (hero + seven capability cards + footer) |
| `styles.css` | Mobile-responsive stylesheet |
| `script.js` | Dynamic year + mobile nav toggle |
| `CNAME` | Custom domain (`massiftech.llc`) for GitHub Pages |

---

## Enabling GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, choose **Deploy from a branch**.
3. Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. In the **Custom domain** field enter `massiftech.llc` and click **Save**.
   GitHub will commit a `CNAME` file (already present) and begin a DNS check.
5. Once the DNS check passes, enable **Enforce HTTPS**.

---

## Porkbun DNS Configuration

Log in to [Porkbun](https://porkbun.com/) and navigate to your `massiftech.llc` domain's DNS settings.

### Required: A records (apex / root `@`)

Add **four** A records pointing `@` to the GitHub Pages IP addresses:

| Type | Host | Answer | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 600 |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |

### Optional: www subdomain

To serve `www.massiftech.llc` as well, add a CNAME record:

| Type | Host | Answer | TTL |
|---|---|---|---|
| CNAME | `www` | `massif-tech.github.io` | 600 |

> **Note:** `massif-tech.github.io` is the GitHub Pages domain for the `massif-tech` organization. Substitute your actual organization or username if different.

> **Canonical host recommendation:** Pick one canonical URL (`https://massiftech.llc` or `https://www.massiftech.llc`) and redirect the other. The simplest approach for a GitHub Pages apex site is to keep `massiftech.llc` as the canonical and let the optional `www` CNAME point there too. You can enforce this with a redirect rule or by relying on GitHub's built-in redirect when both point to the same Pages site.

---

## HTTPS & DNS Propagation

- After updating DNS records, **allow up to 48 hours** for propagation worldwide (usually much faster).
- GitHub Pages performs a DNS check and will not issue a TLS certificate until it resolves the domain correctly.
- You can monitor propagation with tools like [dnschecker.org](https://dnschecker.org/).
- Once propagation is complete and the GitHub DNS check passes, the **Enforce HTTPS** option in Pages settings will become available.