# Discord Rpc Builder

Discord rpc için en iyi seçenek.

## İndir

```bash
git clone https://github.com/mertssmnoglu/discord-rpc-builder
```

## Kurulum ve Ayarlar

#### Gereken Yazılımlar:

- [x] [Node Js](https://nodejs.org)
- [x] [Npm](https://npmjs.com) => Genellikle Node Js ile birlikte gelir, ekstra kurulum gerekmez.

#### Gereken Npm Modülleri:

- [x] [discord-rpc](https://npmjs.com/package/) => İndirdiğiniz dosyanın klasörüne girip terminale `npm i discord-rpc` yazın.

#### Yeni Uygulama Oluşturma:

1) [Discord Developers](https://discord.com/developers/applications) sitesine giriş yapın.

2) Sağ üst köşeden `New Application` yazan butona tıklayın ardından durumunuzda göstermek istediğiniz ismi girin ve `Create` butonuna tıklayın.
![Yeni Uygulama](https://cdn.discordapp.com/attachments/838394083013689345/844095138660745246/unknown.png)
![Uygulamaya isim verin](https://cdn.discordapp.com/attachments/838394083013689345/844095665977557042/unknown.png)

3) Açılan sekmede yazan `Application ID`'yi kopyalayın ve config.json dosyasındaki id kısmına yapıştırın.

4) config.json dosyasındaki diğer ayarları yapınız.

    details : ilk satır

    state : ikinci satır

#### Uygulama'ya Görsel Ekleme:

! Eğer görsel eklemeyecekseniz bu adımları geçebilirsiniz.

5) `Rich Presence` kısmına gelin ve buradan durumda gözükmesini istediğiniz görselleri ekleyin.
![Görsel Ekleme](https://cdn.discordapp.com/attachments/838394083013689345/844096542377508884/unknown.png)
![Görsel Yükleme Alanı](https://cdn.discordapp.com/attachments/838394083013689345/844097302666936320/unknown.png)

Discord, eklediğiniz görselleri anında gösteremeyebilir 5-10 dk arayla siteyi yenileyiniz.

6) Eklediğiniz görsellerin isimlerini config.json dosyasınaki `largeImageKey` veya `smallImageKey` kısımlarına yazınız.
Bu işlemi yaptıktan sonra imleç ile görsellerin üzerine gelince çıkacak olan yazıları ekleyiniz(`largeImageText` veya `smallImageText`)

#### Buton Ekleme - Kaldırma:

7) Butonlarınızı bu formata uygun şekilde düzenleyiniz.
    ```json
    "buttons":[
        {"label":"buton","url":"link1"},
        {"label":"buton2","url":"link2"}
    ]
    ```
    Eğer sadece bir buton kullanmak istiyorsanız dizinin içerisinde sadece 1 buton bırakın, eğer buton kullanmak istemiyorsanız "buttons" dizinini siliniz.