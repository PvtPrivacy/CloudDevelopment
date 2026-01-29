# Idea
Päätin keksiä foorumin kaltainen sivusto, johon käyttäjä kirjautuu omilla tunnuksilla ja pysty näkemään ja jättämään kommenteja. Sivustossa näkyy lyhyt uutinen Suomen liigasta mihin ihmset ovat kommentoineet.

# Visuaallisuus ja selkeys
Sivusto 
# Responsiivisuus
## Desktop 
Sivusto toimii hyvin ja kaikki elementit latautuvat ja asettuvat oikein. Käyttäjän näkökulmasta sivusto lataaminen menee sujuvasti ilman mitään konkreettisia ongelmia.

## Mobile
Sivuston ulkonäkö sijoittuu hyvin ja sivuston layout menevät sopivasti näkyviin riippumatta mistä puhelimen koosta puhutaan. Sivusto hyödyntää tehokkaasti tilaa.

# Autentikoinnin
Sivustossa hyödynnettään Firebase sekä Firestore ja sen lisäksi Firebase UI, johon tarvitaan itse Firebase.

# Toimivuus uusimmilla selaimilla
- Microsoft Edge
Ei mitään ongelmia havaittavissa. Latautuu hyvin.
- Firefox
Ei mitään ongelmia havaittavissa. Firefox on käytetty pääselaimena kun sivusto suunniteltiin. Elementit latautuvat oikein.
- Google Chrome
Ei minkälaisia ongelmia havaittavissa. Ei mitään eroavaisuuksia muiden selaimien kanssa, eli kaikki latautuu hyvin.

# Sivujen latautumisaika

### **Desktop**
Sivusto latautuu erinomaisesti. Sivusto voidaan vielä optimoida, mutta käyttäjän kokemusta sillä ei ole merkittävä merkitystä.
<img width="962" height="766" alt="image" src="https://github.com/user-attachments/assets/b4c648ee-0cdd-4378-8a5c-fa01cc48ca26"/>
### **Mobile**
Sivusto latautuu kohtuullisesti, mutta sivusto voisi vielä optimoida. Ongelma johtuu suurin osin javascriptin käytöstä, johon sitä pitäsi katsella uudelleen. 
<img width="985" height="758" alt="image" src="https://github.com/user-attachments/assets/2b866554-fa7f-4ba0-81cc-7b8024276166" />


<img width="1178" height="796" alt="image" src="https://github.com/user-attachments/assets/07cedea4-834e-4d3b-8030-a21cefbcc5de" />


arvioinnissa käytetyt kriteerit:

    idea = jokin käytännöllinen sivusto, jossa on hyödyllistä tietoa
    sisältö = sivustolla on toimintoja, joilla voidaan tietoa tutkia
    visuaalisuus ja selkeys = Nielsen heuristiikkojen mukainen käytettävyys
    sivuilla on samanlainen navigointi ja ulkoasu, joka täyttää WCAG eli Web Content Accessibility Guidelines -ohjeistuksen
    responsiivisuus = toimivuus eri kokoisilla päätelaitteilla (testaa ja tee lyhyt raportti)
    autentikoinnin (Firebase), tietokannan (Firestore) ja kolmannen osapuolien palveluiden (esimerkiksi REST-rajapinnan yli) käyttö
    toimivuus uusimmilla selaimilla (testaa ja tee lyhyt raportti)
    sivujen latautumisaika kohtuullinen (testaa ja tee lyhyt raportti)




Keksin sivusto, joka toimii ns. jääkiekon joukkueen foorumina eli faneille. Sivustossa on muutamat toiminnat jotka auttavat yhdistää faneja ympäri maatta. Heti ensimmäisessä sivustossa näkyy uutinen, johon käyttäjät voivat jättää kommentia. Jotta käyttäjät voivat jättää kommentia ja nähdä muita kommenteja heidän täytyy rekisteriöidä ja kirjautua sivustoon. Tähän on käytetty firebase ja firestore. 

