# miten Jekyll sivustoa voisi automatisoida käyttäen GitHub Actions-toimintoja. Vastaa myös millaisilla kehitystyökaluilla ja -tekniikoilla saataisiin CI/CD-putkisto rakennettua web-sovellukselle. Tekstimäärä noin 150 sanaa.

Jekyll sivuston automatisointi voidaan hyödyntää käyttämällä GitHub actions toimintoja. Kun kehittäjä tekee muutoksia sivuston koodiin ja sitten siirtää ne GitHubiin, Actions käynnistyy välittömästi ja alkaa suorittamaan kaikki tarvittavat askeleet:
- Hakee koodin
- Asentaa tarvittavat riippuvuudet.
- Rakentaa koko sivuston staattsiksi HTMl tiedostoiksi.

Actionsin avulla voidaan varmistaa, että sivusto on aina ajan tasalla nopeasti ja virheettömasti jokaisen muutoksen jälkeen. 

Jotta saataisiin CI/CD-putkisto rakennettua web-sovellukselle siihen tarvitaan vankka yhdistelmä kehitystyökaluja ja teknologioita. CI-vaihessa voidaan hyödyntää versionhallintajärjestelmiä kuten esim. Gitiä, ja CI/CD-palvelinta kuten GitHub Actionsia tai Jenkinisiä, jotka ajaavat automaattiset testit.

CD-vaihessa koodin laadun varstamisen sovelluksen paketointiin käytetään usein "Docker" kontteja. Docker mahdollistaa sovelluksen ajamisen samalla tavalla kaikissa ympäristöissä. 
