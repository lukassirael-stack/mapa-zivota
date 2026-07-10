# Mapa života — nasazení

Samostatný Vercel projekt (jako `prihlaska-pyramidy`). Soubory jsou v **rootu repa** — žádný podadresář jako u `oaza-web/`.

## ⚠️ Než pustíš kampaň

`lib/questions.js` je zatím z **19otázkové verze** kvízu — produkce má 20 otázek Fáze 1.
Nasadit a otestovat platbu můžeš hned, ale **kampaň nepouštěj**, dokud nedodám finální
`questions.js` z produkčního `index.html` kvízu. S 19 otázkami by se odpovědi Fáze 1
dekódovaly posunutě.

## 1. Repo + Vercel

1. Nové GitHub repo `lukassirael-stack/mapa-zivota`, nahraj celý obsah balíku (bez `node_modules`).
2. Vercel → **Add New Project** → import repa. Framework: **Other**, Root Directory: `.` (výchozí).
3. Po prvním deployi: **Settings → Domains** → přidej `mapa-zivota.oaza-adamanthea.cz`.
   DNS záznam (CNAME → `cname.vercel-dns.com`) už ve Wixu existuje, ověří se hned.

## 2. Env proměnné (Settings → Environment Variables, prostředí Production)

| Název | Hodnota |
|---|---|
| `ANTHROPIC_API_KEY` | tvůj klíč z console.anthropic.com |
| `SUPABASE_URL` | `https://myybuesoourgpbouwwst.supabase.co` |
| `SUPABASE_SERVICE_KEY` | **nový rotovaný** service klíč (`sb_secret_…`) — NE starý legacy JWT |
| `BREVO_API_KEY` | klíč z Brevo |
| `BREVO_TEMPLATE_ID` | `2` |
| `ADMIN_HESLO` | zvol si heslo pro /admin |
| `SITE_URL` | `https://mapa-zivota.oaza-adamanthea.cz` |
| `STRIPE_SECRET_KEY` | `sk_live_…` (stejný Stripe účet jako kvíz) |
| `STRIPE_WEBHOOK_SECRET` | vyplníš v kroku 3 |

Po doplnění env → **Redeploy**.

## 3. Stripe webhook

Stripe Dashboard → **Developers → Webhooks → Add endpoint**:

- URL: `https://mapa-zivota.oaza-adamanthea.cz/api/stripe-webhook`
- Events: jen **`checkout.session.completed`**
- Po vytvoření zkopíruj **Signing secret** (`whsec_…`) → env `STRIPE_WEBHOOK_SECRET` → Redeploy.

Webhook kvízu se nemění, běží dál nezávisle.

## 4. Brevo šablona #2

Zkontroluj, že šablona **#2 „Mapa života"** je **Active** a používá proměnné
`{{ params.JMENO }}`, `{{ params.ODKAZ }}`, `{{ params.ROD }}`. PDF chodí jako příloha
automaticky. Odesílatel: `info@oaza-adamanthea.cz`.

## 5. Test naostro (10 minut)

1. Otevři `https://mapa-zivota.oaza-adamanthea.cz/?kod=HVEZDA-14W1R` (tvůj kód).
2. Zaplať vlastní kartou (444 Kč) → děkovná stránka se sama přepne, až bude mapa hotová (~1–2 min).
3. Zkontroluj e-mail (odkaz + PDF) a `/admin` (status `sent`).
4. Ve Stripe platbu **refunduj**.

Kdyby generování spadlo: `/admin` ukáže status `error` s detailem, tlačítko
**⟳ Vygenerovat** to spustí znovu.

## 6. Kampaň (až po finálním questions.js)

1. Brevo → **Contacts → Import** → `brevo-kampan-mapa-zivota.csv` (68 kontaktů, tvoje
   3 testovací adresy jsou vyřazené). Atributy: `JMENO`, `OSLOVENI`, `CELE_JMENO`, `KOD`, `ODKAZ`.
2. Nový seznam např. „Kvíz — absolventi (Mapa života)".
3. Kampaň: oslovení `Milá/Milý {{ contact.OSLOVENI }}` (nebo neutrálně
   `{{ contact.JMENO }}`), tlačítko s odkazem `{{ contact.ODKAZ }}` — každý má svůj
   osobní odkaz, stránka ho přivítá jménem.

## Jak to celé běží

```
odkaz s kódem → stránka pozná jménem → Stripe Checkout 444 Kč
→ webhook (raw-body verifikace) → mapa se generuje na pozadí (Sonnet 4.6)
→ uloží se do `mapy` → Brevo e-mail (odkaz + PDF) → děkovná stránka nabídne zobrazení
```

- Idempotentní: dvojitý webhook ani druhá platba stejného kódu nic nerozbijí.
- Kdo dělal kvíz před ukládáním odpovědí (20 lidí), platbu neuvidí — stránka je
  odkáže na `oaza.adamanthea@gmail.com`.
- Ascendent se počítá jen při známém čase narození + místě z vestavěné tabulky
  ~150 CZ/SK měst; jinak mapa běží bez něj (9 lidí z 68 nemá čas).
