# Conversion tracking

Every call, WhatsApp and directions click on the page is tracked. Attribution
(`gclid`, `utm_*`) is captured on landing, stored in `sessionStorage`, and
attached to every event afterwards, so a conversion still carries its campaign
even though the click happens several scrolls later.

## Events pushed to `dataLayer`

| Event name | Fires on | Counts as a lead |
| --- | --- | --- |
| `phone_call_click` | any `tel:` link (header, hero, cards, footer, thumb bar) | yes |
| `whatsapp_click` | any `wa.me` link, including the six service cards | yes |
| `get_directions_click` | Google Maps links | no |
| `cta_click` | any other button or link | no |

Leads are listed in `PRIMARY_CONVERSIONS` in `src/data/trackingConfig.js`, and
each event carries `is_primary_conversion: true|false` so one trigger can
separate leads from engagement.

Each push also includes: `page_path`, `page_location`, `page_title`,
`page_referrer`, `cta_text`, `cta_label`, `cta_location` (`hero`, `header`,
`quick_actions`, `service_card`, `sticky_bar`, `location_card`, `map_fallback`,
`neonatology_band`), plus `gclid`, `fbclid` and any `utm_*`.

Tracking is delegated from `document` in the **capture** phase, so it runs
before the browser leaves the page on a `tel:` tap. Nothing needs a
`data-` attribute to be tracked, but the explicit
`data-conversion-name` / `data-conversion-location` attributes on the CTAs give
cleaner labels than scraped button text.

## Wiring Google Ads: pick ONE of these

Doing both double counts every lead.

### Option A: inside GTM (recommended if you already manage tags there)

1. Create a **Custom Event** trigger. Event name, using *matches RegEx*:
   `phone_call_click|whatsapp_click`
2. Create a **Google Ads Conversion Tracking** tag, paste the Conversion ID and
   Label from the Ads conversion action, and attach that trigger.
3. Add Data Layer Variables for anything you want in reporting (`cta_location`,
   `cta_text`, `gclid`).
4. Leave `NEXT_PUBLIC_GADS_CONVERSION_ID` and `..._LABEL` **empty**.

### Option B: straight from the page, no GTM tag work

Set both build variables and redeploy:

```
NEXT_PUBLIC_GADS_CONVERSION_ID=AW-1234567890
NEXT_PUBLIC_GADS_CONVERSION_LABEL=yourConversionLabel
```

The page then loads `gtag.js` itself and fires
`gtag('event','conversion',{send_to:'AW-…/label'})` on every lead event.

> These are **build-time** values. This is a static export, so setting them in
> Cloudflare Pages does nothing until the next deploy.

## Verifying

Append `?debug_conversion=1` to the URL. Every tracked click then shows an
on-screen toast with the event name and target, and logs the full payload to the
console. Test a real ad landing by adding a fake click id:

```
https://your-domain/?debug_conversion=1&gclid=TEST123&utm_source=google&utm_medium=cpc
```

Then confirm `gclid: "TEST123"` rides along on the click payload. Also use GTM
Preview, and Google Ads → Goals → Conversions, where a new action sits at
"Unverified" until it records its first real conversion.

## Known gaps

- **Consent Mode v2 is not implemented.** Fine for India-only traffic; required
  if you advertise into the EEA or UK.
- **`tel:` clicks measure intent, not calls.** They count the tap, not whether
  anyone spoke. For real call data use a Google forwarding number or call
  reporting.
- **Enhanced conversions are not set up.** There is no form on the page, so
  there is no email or phone number to hash and send back.
- The GTM container id currently falls back to the hardcoded `GTM-5P3JLG2Q` in
  `src/data/trackingConfig.js`. Confirm that is the right container.
