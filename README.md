# Erinç Polat — Portfolio

Erinç Polat'ın Türkçe ve İngilizce kişisel portfolyosu. Hizmetler, seçili web/mobil projeleri, proje galerileri ve e-posta iletişim formunu içerir.

## Yerel geliştirme

Node.js 20.9 veya üzeri ve Yarn 1.22.22 kullanılır. Bağımlılık sürümleri `yarn.lock` ile sabitlenir.

```bash
yarn install --frozen-lockfile
```

Proje kökünde `.env.local` oluşturun:

```dotenv
RESEND_API_KEY=your_resend_api_key
```

Gerçek anahtarları kaynak dosyalarına veya sürüm kontrolüne eklemeyin. İletişim formu Resend kullanır; `src/app/actions/sendEmail.ts` içindeki gönderici adresinin ilgili Resend hesabında doğrulanmış olması gerekir. Alıcı adresi de aynı dosyada tanımlıdır.

```bash
yarn dev
```

Siteyi `http://localhost:3000/en` veya `http://localhost:3000/tr` adresinde açın. Varsayılan dil İngilizcedir.

## Komutlar ve doğrulama

| Komut | Amaç |
| --- | --- |
| `yarn dev` | Geliştirme sunucusu |
| `yarn lint` | ESLint denetimi |
| `yarn tsc --noEmit` | TypeScript denetimi |
| `yarn test:brand` | Marka renklerinin testleri |
| `yarn test:brand-assets` | Marka görsellerinin doğrulanması |
| `yarn brand:assets` | Marka görsellerini yeniden renklendirir; dosyaları değiştirir |
| `yarn build` | Üretim derlemesi |
| `yarn start` | Derlenmiş uygulamanın sunucusu |

`next.config.mjs` şu anda `typescript.ignoreBuildErrors` kullanır; başarılı bir build tek başına tip doğrulaması sayılmaz. `yarn tsc --noEmit` ayrıca çalıştırılmalıdır. Google fontları `next/font` üzerinden yüklenir; ilk derleme font sağlayıcısına ağ erişimi gerektirebilir.

## Kaynak yapısı

- `src/app/[locale]`: yerelleştirilmiş ana sayfa, proje listesi ve proje detay rotaları.
- `src/app/actions/sendEmail.ts`: Resend sunucu aksiyonu.
- `src/components`: ortak arayüz bileşenleri ve sayfa bölümleri.
- `src/data/projects.en.ts`, `src/data/projects.tr.ts`: dile göre proje içerikleri ve galeri açıklamaları.
- `src/locales`: İngilizce/Türkçe arayüz mesajları.
- `src/i18n` ve `src/proxy.ts`: dil doğrulama, yönlendirme ve mesaj yükleme.
- `src/utils`: tema, renkler, fontlar ve boşluk değerleri.
- `public`: proje görselleri, ikonlar ve özgeçmiş.

Arayüz Next.js App Router, React, TypeScript, MUI, Framer Motion ve next-intl kullanır. Tasarım kuralları ve yeniden kullanılabilir bileşenlerin kullanım örnekleri `DESIGN.md` içindedir. Yeni UI çalışmasında önce mevcut bileşenleri kontrol edin.

## Loglama ve kod hijyeni

- Üretim kodunda geçici `console.log`, başarı logları ve form verisi dökümleri kullanılmaz. Beklenen doğrulama hataları kullanıcıya yerelleştirilmiş mesajlarla gösterilir.
- Operasyonel hatalar sunucuda `console.error`, uyarılar gerektiğinde `console.warn` ile kaydedilir. Loglara isim, e-posta, mesaj, API anahtarı veya ham sağlayıcı hata nesnesi eklenmez; sabit olay metni ve gerektiğinde hata kodu yeterlidir.
- E-posta aksiyonu istemciye yalnızca tipli bir sonuç döndürür; ham hata nesnelerini iletmez.
- Aktif portfolyo kodunda `any` ve TypeScript hata bastırmaları ESLint ile engellenir. Eski AR/3B uygulaması (`marifet-ar`, `Spinner3d`) bu P3 temizliğinin kapsamı dışındadır ve ayrı değerlendirilir.
- Kullanılmayan importları ve yorumlanmış eski uygulamaları temizleyin; davranışın nedenini açıklayan yorumları ve lisans atıflarını koruyun.

Google Analytics yapılandırması yerelleştirilmiş layout içinde bulunur. Anahtarlar ve kullanıcı mesajları loglama ya da analitik olaylarına eklenmemelidir.
