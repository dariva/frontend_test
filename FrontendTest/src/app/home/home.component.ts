import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Place } from '../models/place';
import { RestService } from '../services/rest.service';
import { Response } from '../models/response';
import { Restaurants } from '../models/restaurants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show: boolean = true;
  place = new Place();
  lat: number = -27.5948698;
  lng: number = -48.5482195;
  zoom: number = 11;
  

  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  search(f: NgForm) {
    this.place.search = f.value.name;
    this.setMap(this.place);
  }
  setMap(place: Place) {
      this.rest.getPlaceData(place).subscribe((res: Response) => {
        place = res.candidates[0];
        console.log(res)
        this.lat = place.geometry.location.lat
        this.lng = place.geometry.location.lng
        this.results.length
      })
  }
  result: any[] = [{
    "lat": -27.5909364,
    "lng": -48.5614454
    },
    {
    "lat": -27.5861659,
    "lng": -48.5477786
    }
  ]
  results: any[] =  [
    { 
       "geometry": {
          "location": {
             "lat": -27.5909364,
             "lng": -48.5614454
          },
          "viewport": {
             "northeast": {
                "lat": -27.58954347010728,
                "lng": -48.56006692010727
             },
             "southwest": {
                "lat": -27.59224312989272,
                "lng": -48.56276657989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "bf7375e03454cc03d26be1c3403a49356db8e8de",
       "name": "Taberna Ibérica",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 1080,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/113776576413284169604/photos\">Odyr Sohn</a>"
             ],
             "photo_reference": "CmRaAAAAH15TXljUr1iXp5DzJXH-Jp_5rHr1RE3rGZoMRBcqbIMs5akv2_gKe1anX0IOSNitqoE5GLxZRZv2USv1jnXFEOKEwl7kqoG7dG1ynE5koeKEVUJUNucsHUZDL5KrogNaEhCFYgY9FyZvflLr71HJ6bXGGhTkWw7x24SUSYYRIBlVSJmV0MF0jA",
             "width": 1920
          }
       ],
       "place_id": "ChIJG1E63h84J5UR63AtSGTQj84",
       "plus_code": {
          "compound_code": "CC5Q+JC Centro, Florianópolis - State of Santa Catarina",
          "global_code": "584HCC5Q+JC"
       },
       "price_level": 3,
       "rating": 4.6,
       "reference": "ChIJG1E63h84J5UR63AtSGTQj84",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 574,
       "vicinity": "R. Felipe Schmidt, 1333 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5861659,
             "lng": -48.5477786
          },
          "viewport": {
             "northeast": {
                "lat": -27.58476452010728,
                "lng": -48.54647467010728
             },
             "southwest": {
                "lat": -27.58746417989272,
                "lng": -48.54917432989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "615645d1fd5846a95abedd5a207a8ab8048a8b4a",
       "name": "Artusi Restaurante",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 750,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/105740110880884356515/photos\">Artusi Restaurante</a>"
             ],
             "photo_reference": "CmRaAAAAhi1h21seJrzkx-Jfh15XrhGDsVwLQEwaahEPjzF4qA5KLzFbyPFbdCXciYl3u-LM4hwq2Rje2wzyF4WuOEBdMa9XPVK2JDdJ10OqRFU_MakJRLYOWeMPZGNS5yqgDwtpEhDG2z69iOyVr4Dk-JEDMJqMGhTmA-ChZVN55fSvIBxWv5tQZHxY6A",
             "width": 1333
          }
       ],
       "place_id": "ChIJb-IXQRc4J5URpUC30rp1jgw",
       "plus_code": {
          "compound_code": "CF72+GV Centro, Florianópolis - State of Santa Catarina",
          "global_code": "584HCF72+GV"
       },
       "price_level": 3,
       "rating": 4.8,
       "reference": "ChIJb-IXQRc4J5URpUC30rp1jgw",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 745,
       "vicinity": "R. Bocaiúva, 2090 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5941754,
             "lng": -48.5613653
          },
          "viewport": {
             "northeast": {
                "lat": -27.59294862010728,
                "lng": -48.55992652010728
             },
             "southwest": {
                "lat": -27.59564827989272,
                "lng": -48.56262617989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "b676d2bfa2461b34bf46d763fa0fc84efd3eb7a9",
       "name": "Rita Maria Lagosteria",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 3088,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/117012722137027539708/photos\">Centro Gastronômico Rita Maria</a>"
             ],
             "photo_reference": "CmRaAAAAk8nl3M4nTb-VhE8GTxl-qIFx75f41PIubRvkKQfquQxsHA4RL2dI6Bm-0C3hEt_68aYU1ZrNHcpVd0BFYWr5-PdqKLYPWLCdUrcG9lT0-S0phfalpavzUrOGre8ozgbNEhBYp_64sCcTf7lB7QLKBU-IGhQIHtu_eyWNP51xtIMjmeWZHABeUQ",
             "width": 4662
          }
       ],
       "place_id": "ChIJJ8vqLvU3J5URYrBzTgoQyEw",
       "plus_code": {
          "compound_code": "CC4Q+8F Centro, Florianópolis - State of Santa Catarina",
          "global_code": "584HCC4Q+8F"
       },
       "price_level": 3,
       "rating": 4.6,
       "reference": "ChIJJ8vqLvU3J5URYrBzTgoQyEw",
       "scope": "GOOGLE",
       "types": [
          "bar",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 664,
       "vicinity": "R. Henrique Valgas, 318 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5917054,
             "lng": -48.5457213
          },
          "viewport": {
             "northeast": {
                "lat": -27.59035897010727,
                "lng": -48.54445952010727
             },
             "southwest": {
                "lat": -27.59305862989272,
                "lng": -48.54715917989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "0d95b6fd4062c8bc9259465c61df0d8e779e1dcd",
       "name": "Pimenta Malagueta",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 4000,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/115664886570566139297/photos\">Anderson Vieira da Silva</a>"
             ],
             "photo_reference": "CmRaAAAA-5EFf_Vbf9t3KG9fTv9-icQoVWKXLNZ8Q_IdyEOxAML_hda13wO9mXoxlpdtVhr8IywXDe5FVXSbZh6qlgFprfDbN66nMUZ8EMpnQ1T-A10U4e4GNcpZ5fyyoZ8s3M__EhBf280rZZuf7yyAaBA97xxjGhRqsx6QqFslRygLzqIoEYWee8nhMw",
             "width": 6000
          }
       ],
       "place_id": "ChIJqfb8Ujw4J5URrRgf-1imboM",
       "plus_code": {
          "compound_code": "CF53+8P Centro, Florianópolis - State of Santa Catarina",
          "global_code": "584HCF53+8P"
       },
       "price_level": 2,
       "rating": 4.8,
       "reference": "ChIJqfb8Ujw4J5URrRgf-1imboM",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 626,
       "vicinity": "R. Alm. Alvim, 384 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5978441,
             "lng": -48.5244508
          },
          "viewport": {
             "northeast": {
                "lat": -27.59662892010727,
                "lng": -48.52314122010728
             },
             "southwest": {
                "lat": -27.59932857989272,
                "lng": -48.52584087989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "9f474b5f7478b6378132252728ad43a853c38c70",
       "name": "Moochacho (Trindade)",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 2988,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/110652743200728639686/photos\">agnaldo.junior01</a>"
             ],
             "photo_reference": "CmRaAAAAZR_9ckWNPDSnJqRDJ38sh1cBxIzz5JsCbaFULoQYqnXqvG6fYg2FGk4nfCUKdu1eqjhGPG_ltvqN6UgIrvokr8z45a5VJIAvW5NcAa1TckuZ-8pUxMZZrRfDzW2uEx4iEhBfjb8IZnanet2FSSNW1PYhGhRrryeMEQki5XIK9BnWaznuu-YLyg",
             "width": 5312
          }
       ],
       "place_id": "ChIJcWoPm1M4J5URzmeQSsCH3Wo",
       "plus_code": {
          "compound_code": "CF2G+V6 Trindade - Destero, Florianópolis - State of Santa Catarina",
          "global_code": "584HCF2G+V6"
       },
       "price_level": 2,
       "rating": 4.7,
       "reference": "ChIJcWoPm1M4J5URzmeQSsCH3Wo",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 1402,
       "vicinity": "R. Des. Vítor Lima, 498 - Trindade, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5863258,
             "lng": -48.5467928
          },
          "viewport": {
             "northeast": {
                "lat": -27.58501887010728,
                "lng": -48.54550662010728
             },
             "southwest": {
                "lat": -27.58771852989272,
                "lng": -48.54820627989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "a6429defd4ad2ca8c1b6135f586e993d210c4ffd",
       "name": "Toca da Garoupa Centro",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 3024,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/105514321786598470594/photos\">EDENIR DA ROSA</a>"
             ],
             "photo_reference": "CmRaAAAAehnXyryvoEDBXTd2P5lASLspbxpQMPemeTniJVW_ZjriukOaxMinGlWMqtwS5n9qT8ou-Hgf_oXlpB2VYqWrLw4sShkHQnsezlSPqQPY2mznhCwCR9HagkRCnxMZT_iEEhDv1Yg0ePaS3KDNbWGHMsIyGhSJoPNOAoMjSbnoVGd9LVsPIEVEeA",
             "width": 4032
          }
       ],
       "place_id": "ChIJ5ZTqRxc4J5UR5YdwpINO_h0",
       "plus_code": {
          "compound_code": "CF73+F7 Florianópolis, State of Santa Catarina",
          "global_code": "584HCF73+F7"
       },
       "price_level": 3,
       "rating": 4.3,
       "reference": "ChIJ5ZTqRxc4J5UR5YdwpINO_h0",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 704,
       "vicinity": "R. Alves de Brito, 181 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5849651,
             "lng": -48.5450911
          },
          "viewport": {
             "northeast": {
                "lat": -27.58337202010727,
                "lng": -48.54394567010728
             },
             "southwest": {
                "lat": -27.58607167989272,
                "lng": -48.54664532989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "2283da1b1721bfd4aca7e67eba8b83f539a402b4",
       "name": "Nipô Sushi - Beiramar",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 2592,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/111223486998363667081/photos\">André Ferrari</a>"
             ],
             "photo_reference": "CmRaAAAADZYgPERX4Zj0PlqcqNCn5dhyhr4Jz1hAs4rusfWwJ0VxuWzAZeHUWG3OAuTQq04EmLYG9V4XinJ38g4ao8S48TuqfbWpn0ISn4oLoqw4_0zwl2BaVwKfBJbpuvP1SIKaEhBRFvuKCkVM821_4MGLxxatGhSsABKtb8mMr_uyTopM8dB32bU0gg",
             "width": 4608
          }
       ],
       "place_id": "ChIJA8czxxY4J5URJsQP_uKL-iw",
       "plus_code": {
          "compound_code": "CF83+2X Florianópolis, State of Santa Catarina",
          "global_code": "584HCF83+2X"
       },
       "rating": 4.7,
       "reference": "ChIJA8czxxY4J5URJsQP_uKL-iw",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 556,
       "vicinity": "R. Bocaiúva, 2468 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5864951,
             "lng": -48.5509877
          },
          "viewport": {
             "northeast": {
                "lat": -27.58508052010728,
                "lng": -48.54966717010728
             },
             "southwest": {
                "lat": -27.58778017989272,
                "lng": -48.55236682989273
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "764662d1e3165c33299bef15717f061401802547",
       "name": "Didge Steakhouse Pub - Floripa",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 3024,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/102917794550083192705/photos\">Fabio Coelho</a>"
             ],
             "photo_reference": "CmRaAAAASVxzTyO4qOSxOI4THcB8tjushVkCx6kv1KjnFkoxbrHlw0AyMsvjFhf-KrqONcpM0zZr-GF0niOSW89zFAI2SeT46aQFs7UKzkkH4lwW-Yz1B5Zo_Wvx08UiF8LtZmwiEhCqCZi_unULuLnPtxLO3NPqGhTtx5MYDJhGFmZphumzogXRG9mmzg",
             "width": 4032
          }
       ],
       "place_id": "ChIJt9wrgRk4J5URwmKJN63P5gQ",
       "plus_code": {
          "compound_code": "CC7X+CJ Centro, Florianópolis - State of Santa Catarina",
          "global_code": "584HCC7X+CJ"
       },
       "price_level": 2,
       "rating": 4.6,
       "reference": "ChIJt9wrgRk4J5URwmKJN63P5gQ",
       "scope": "GOOGLE",
       "types": [
          "bar",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 1938,
       "vicinity": "Av. Jorn. Rubéns de Arruda Ramos, 1976 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5858756,
             "lng": -48.5465936
          },
          "viewport": {
             "northeast": {
                "lat": -27.58448257010727,
                "lng": -48.54517572010727
             },
             "southwest": {
                "lat": -27.58718222989271,
                "lng": -48.54787537989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "40aa977ff60189803e776af482c9c6eacae9462f",
       "name": "Kikoni Japafood",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 1857,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/114515048260226135602/photos\">A Google User</a>"
             ],
             "photo_reference": "CmRaAAAAHLwRdlaTuYEAnIf8lhGj_i4AJ0Ar3fq9RrpiCP3Cm8cegGbN7pR11pxXp3q5ajj3EzoCFwStxWXh8WKZM3zb9PL5wVkfO7WD0atf28lzyCtCjMfvbyGOW7OxM5UP2FhMEhCmsSQsVJ2ybmpHyIbjKhQVGhRytgR3tqe1MJXqXgh7aVRkp1JJag",
             "width": 1328
          }
       ],
       "place_id": "ChIJESwowyI4J5UR7ESTtMSSJ_4",
       "plus_code": {
          "compound_code": "CF73+J9 Centro, Florianópolis - State of Santa Catarina",
          "global_code": "584HCF73+J9"
       },
       "price_level": 3,
       "rating": 4.6,
       "reference": "ChIJESwowyI4J5UR7ESTtMSSJ_4",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 458,
       "vicinity": "R. Rafael Bandeira, 327 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5973887,
             "lng": -48.55305670000001
          },
          "viewport": {
             "northeast": {
                "lat": -27.59596302010728,
                "lng": -48.55183217010728
             },
             "southwest": {
                "lat": -27.59866267989273,
                "lng": -48.55453182989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "082d4c36ff85d1b55752cd46fc5af0b398fbf628",
       "name": "Box 32",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 2832,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/117604711499999343533/photos\">Box 32</a>"
             ],
             "photo_reference": "CmRaAAAAuxpflPn3QUkc3JOVWNCUJ8o6-xw8AflczKbS8K7TQfX0qOBW4RxebA_wlR88kLui-SkPv4AtpRVFAPOaVw0dVrV13PYgL8RzKkJ2r0L3HE6jYrmFHjQNUHLMC12sgPubEhBUx6ZCKVAt_--RYITIrVijGhQJDDnaBVRrWNqAaqaJcp8973V86Q",
             "width": 4256
          }
       ],
       "place_id": "ChIJF3yeVzs4J5URUAQ_xnF-G18",
       "plus_code": {
          "compound_code": "CC3W+2Q Centro, Florianópolis - State of Santa Catarina",
          "global_code": "584HCC3W+2Q"
       },
       "price_level": 3,
       "rating": 4.2,
       "reference": "ChIJF3yeVzs4J5URUAQ_xnF-G18",
       "scope": "GOOGLE",
       "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total": 881,
       "vicinity": "04 Mercado Público de Florianópolis, R. Jerônimo Coelho, 60 - 32 - Centro, Florianópolis"
    },
    {
       "geometry": {
          "location": {
             "lat": -27.5755592,
             "lng": -48.526259
          },
          "viewport": {
             "northeast": {
                "lat": -27.57416427010727,
                "lng": -48.52482967010727
             },
             "southwest": {
                "lat": -27.57686392989272,
                "lng": -48.52752932989272
             }
          }
       },
       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
       "id": "bb29324482607d221a9c93be274870dd89d7f74a",
       "name": "Restaurante Shawarmeria",
       "opening_hours": {
          "open_now": false
       },
       "photos": [
          {
             "height": 989,
             "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/108546751159295893517/photos\">Restaurante Shawarmeria</a>"
             ],
             "photo_reference": "CmRaAAAAUqWmsfR4srhoCCLJZJkfF3vvn61Z0CaAOLu__UhK91BO5xKQLtvXh7mtJXplC0T3zeuNzQUbX-wHXRo1Ucc-68cgfLnT32wcur3x8QIL6QB7ZohiuDf8mL-E1BkJtzSSEhDUt7DqpE644GsCoPmsEyG5GhSQ--J0VVNqN40gmzH4ait1GbwYnA",
             "width": 1756
          }
       ],
       "place_id": "ChIJQzDErWU4J5UR5VMXeZqDyDY",
       "plus_code": {
          "compound_code": "CFFF+QF Agronômica, Florianópolis - State of Santa Catarina",
          "global_code": "584HCFFF+QF"
       },
       "price_level": 2,
       "rating": 4.4,
       "reference": "ChIJQzDErWU4J5UR5VMXeZqDyDY",
       "scope": "GOOGLE",
       "types": [
          "meal_takeaway",
          "bar",
          "restaurant",
          "food",
          "point_of_interest",
          "store",
          "establishment"
       ],
       "user_ratings_total": 857,
       "vicinity": "Rua Paschoal Apóstolo Pítsica, 1841 - Agronômica, Florianópolis"
    }
 ]
}