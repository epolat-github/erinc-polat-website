# P2 / 12 — Client bundle ölçümü

20 Ekim 2026. Başlangıç: `010a432`. Next.js 16.4.2 production build.

`ServicesSection`, `WhoAmISection`, `MyWorksSection` ve proje listesi sunucu bileşenine taşındı. Dil seçimi, statik çeviriler ve proje veri dosyaları sunucuda işleniyor. Tarayıcıya kartlar için yalnızca gereken başlık, özet, görsel ve bağlantı props'ları gönderiliyor. Animasyonlar mevcut küçük client bileşenlerinde kaldı. `MyWorkCard` artık callback yerine yerelleştirilmiş `href` kullanıyor.

| Rota | Önce gzip bayt | Sonra gzip bayt | Fark |
| --- | ---: | ---: | ---: |
| Ana sayfa | 173548 | 166435 | −7113 (%4,1) |
| Projeler listesi | 147158 | 140828 | −6330 (%4,3) |
| Proje detayı | 142352 | 142456 | +104 |

Ölçüm: her rotanın `.next/server/app/[locale]/*_client-reference-manifest.js` dosyasındaki benzersiz JavaScript chunk'larının ayrı ayrı gzip boyutlarının toplamı. Paylaşılan chunk bir rota içinde bir kez sayılır. Bu değer gerçek ağ transferi, LCP veya eski rapordaki First Load JS metriği değildir; eski 236/207/156 kB değerleriyle doğrudan karşılaştırılmamalıdır. RSC/HTML, görseller ve sonradan yapılan prefetch istekleri dahil değildir. MUI ve animasyon kitaplığının ortak yükü devam ediyor.

Yeniden ölçmek için:

```sh
npm run build
node scripts/measure-client-bundle.mjs
```

Doğrulama: production build, bağımsız TypeScript kontrolü, değişen dosyalarda ESLint, Türkçe/İngilizce ana sayfa ve projeler listesinden detay navigasyonu; 320px mobil taşma kontrolü. Temiz production tarayıcı oturumunda console hatası görülmedi. Build'in mevcut metadataBase uyarısı bu çalışmanın kapsamı dışında kaldı.
