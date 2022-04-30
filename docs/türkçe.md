# Discord Rpc Builder

Discord rpc için en iyi seçenek.

## İndir

```bash
git clone https://github.com/mertssmnoglu/discord-rpc-builder
```

## Kurulum ve Ayarlar

#### Gereklilikler:

- [x] [Node Js](https://nodejs.org)
- [x] [discord-rpc Modülü](https://npmjs.com/package/discord-rpc)
- [x] [inquirer Modülü](https://npmjs.com/package/)

`npm install` komutunu kullanarak tüm gerekli npm modüllerini indirin.

#### Yeni Uygulama Oluşturma:

1) [Discord Developers](https://discord.com/developers/applications) sitesine giriş yapın.

2) Sağ üst köşeden `New Application` yazan butona tıklayın ardından durumunuzda göstermek istediğiniz ismi girin ve `Create` butonuna tıklayın.
![Yeni Uygulama](https://cdn.discordapp.com/attachments/869417576931926036/970000328114180136/unknown.png)

#### Uygulama'ya Görsel Ekleme:

! Eğer görsel eklemeyecekseniz bu adımları geçebilirsiniz.

5) `Rich Presence` kısmına gelin ve buradan durumda gözükmesini istediğiniz görselleri ekleyin.

![Görsel Yükleme Alanı](https://cdn.discordapp.com/attachments/869417576931926036/969999909384257586/unknown.png)

Discord, eklediğiniz görselleri anında gösteremeyebilir 5-10 dk arayla siteyi yenileyiniz.

## Çalıştırma

Uygulamayı npm run komutunu kullanarak çalıştırın.

```bash
npm run
```

Eğer uygulamayı ilk defa çalıştırıyorsanız sizden sırasıyla

1. Oluşturduğunuz discord uygulamasının id'si
2. Uygulamanın ilk satırında gözükecek yazıyı
3. Uygulamanın ikinci satırında gözükecek yazıyı
4. Eğer varsa eklediğiniz görsellerin anahtarlarını ve yazılarını
5. Eğer varsa ekleyeceğiniz butonların sayısını ve içeriklerini

isteyecektir. Tüm bu veriler doğru şekilde girildikten sonra 5 saniye içerisinde uygulama çalışacaktır.