import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  results = [
       {
          "geometry": {
             "location": {
                "lat": -27.5864544,
                "lng": -48.5505642
             },
             "viewport": {
                "northeast": {
                   "lat": -27.58499212010727,
                   "lng": -48.54926597010727
                },
                "southwest": {
                   "lat": -27.58769177989272,
                   "lng": -48.55196562989271
                }
             }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "0cded20da1fb37d7f172e353cfe5a71b701e7fcd",
          "name": "SANTA CUCINA",
          "photos": [
             {
                "height": 2988,
                "html_attributions": [
                   "<a href=\"https://maps.google.com/maps/contrib/107326848890495003332/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAA4COCfLKYCdEorn_4S2MvHG9qXk2GPnrMY8TftqEBAYtawxJUYiCiP5Bj40eqIW7__RjRS5uoGTFJAVeXCzbQxUipEJ65g18MAkZJZ2x-BLNYpvDiJreYN7JS1YLAkqszEhCeZGAAJW0lH_zH5UxTJoj9GhTzFfGLA77qMFjmCbTQQCQ9Gvt6hA",
                "width": 5312
             }
          ],
          "place_id": "ChIJMy1Ejxk4J5UR7SNyGFOiWi4",
          "plus_code": {
             "compound_code": "CC7X+CQ Florianópolis, State of Santa Catarina",
             "global_code": "584HCC7X+CQ"
          },
          "rating": 4.6,
          "reference": "ChIJMy1Ejxk4J5UR7SNyGFOiWi4",
          "scope": "GOOGLE",
          "types": [
             "restaurant",
             "food",
             "point_of_interest",
             "establishment"
          ],
          "user_ratings_total": 107,
          "vicinity": "Av. Jorn. Rubéns de Arruda Ramos, 2034 - Centro, Florianópolis"
       },
       {
          "geometry": {
             "location": {
                "lat": -27.6157168,
                "lng": -48.5855814
             },
             "viewport": {
                "northeast": {
                   "lat": -27.61451322010727,
                   "lng": -48.58426847010727
                },
                "southwest": {
                   "lat": -27.61721287989272,
                   "lng": -48.58696812989272
                }
             }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "ae9c98d6529f4ff47abcd9973bc2997bd3d322e2",
          "name": "By Cuca Restaurante",
          "opening_hours": {
             "open_now": false
          },
          "photos": [
             {
                "height": 1367,
                "html_attributions": [
                   "<a href=\"https://maps.google.com/maps/contrib/107713333797654939095/photos\">By Cuca Restaurante</a>"
                ],
                "photo_reference": "CmRaAAAA1uxXHGVrF3iui29clwoErZMxR_JPC9bl83KtYIntB4r-SeQCyyk1l5VPRFuho6HMXCYvVHhcPhlRS_c9wwtVeWJRToBcwqyLSQB9_BVSjnTgN3IWtQDkgNuck36ea5liEhDggSp86oz3NOa4BYE7PbpDGhRAY82MoZEaWNIvVV2Lxv4dTc2-zA",
                "width": 2048
             }
          ],
          "place_id": "ChIJYzMyc6Y3J5URc1cZuzuzbJc",
          "plus_code": {
             "compound_code": "9CM7+PQ Coqueiros, Florianópolis - State of Santa Catarina",
             "global_code": "584H9CM7+PQ"
          },
          "price_level": 2,
          "rating": 4.4,
          "reference": "ChIJYzMyc6Y3J5URc1cZuzuzbJc",
          "scope": "GOOGLE",
          "types": [
             "restaurant",
             "food",
             "point_of_interest",
             "establishment"
          ],
          "user_ratings_total": 929,
          "vicinity": "R. André Wendhausen, 175 - Coqueiros, Florianópolis"
       },
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
                "photo_reference": "CmRaAAAAs_MvgfB2khuZnNTzjkH_SXCrSk2K02hL9JyZr0Tflk_J6DYUz8UVdO3MkrHsmSgk_xVKxkUzRNVKGkP1zt-hjFqwTh0CEEVCixd6055eAIrl2tt3o2oenCUK0S0ms0YJEhDRh9aigHdCV0rMbrCpeR-tGhSW2yTbi3rsmaSzVSxXh4Mn0QFKQg",
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
                "photo_reference": "CmRaAAAATqMB_W-yzpg26wcDx2KfPMvJnRXLXucFjlMZ9aEC_LDoNmiQoWSv3VjhzWxXim3U6x0H6QWR-NV0CVzO235zDKU8yJw0iWwi5CmE1GUvCcvj77z06q59szoFp6I89u7MEhBYX629TfyjDIe4gfiXXOMUGhQlA2bePS5VwZTFsx1KbEtuhN2Sgg",
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
                "photo_reference": "CmRaAAAAFz8FVXNHSligo8_qxOBuAe0xCRaw59aTN87FTCd3q15Qym_9Ep5yJ8YC-zDT5iL_2cN450IPUe2ei7ryS5tvnnOIJu7bfFldTY7f5TWriTuZNPPZDX1f2duOXDoT1YdLEhB8Qi2-oY35DLG-8xVtIcM1GhTrrHe6XM9ZCcSHexGEjAYzevep_g",
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
                "lat": -27.6107891,
                "lng": -48.58061130000001
             },
             "viewport": {
                "northeast": {
                   "lat": -27.60955732010728,
                   "lng": -48.57919232010728
                },
                "southwest": {
                   "lat": -27.61225697989272,
                   "lng": -48.58189197989272
                }
             }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "912c705cd912edfbe0a245a534acd7ecb30434c5",
          "name": "Trofi Restaurante",
          "opening_hours": {
             "open_now": false
          },
          "photos": [
             {
                "height": 2640,
                "html_attributions": [
                   "<a href=\"https://maps.google.com/maps/contrib/109809819096149332281/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRZAAAAiOsj-b3KCKeyqoA9N9mMTEFHNxmsvnc0RKRfxNN7dqLFPFdg1Ftw1F8lNfubKrHIHHtSyWYKY5Kbf0GvgbrgwsurBKNOJxTD0zilnuQrc-MbqUKsjcIM_dIalI25bdatEhASkjj-XHH3S9MMbOGDFOyLGhQOZkU60XZvk2cGA1oKavUheCyF3A",
                "width": 3960
             }
          ],
          "place_id": "ChIJN9EBML03J5URYjT10VJvR8U",
          "plus_code": {
             "compound_code": "9CQ9+MQ Coqueiros, Florianópolis - State of Santa Catarina",
             "global_code": "584H9CQ9+MQ"
          },
          "price_level": 2,
          "rating": 4.7,
          "reference": "ChIJN9EBML03J5URYjT10VJvR8U",
          "scope": "GOOGLE",
          "types": [
             "restaurant",
             "food",
             "point_of_interest",
             "establishment"
          ],
          "user_ratings_total": 644,
          "vicinity": "R. Des. Pedro Silva, 1830 - Coqueiros, Florianópolis"
       },
       {
          "geometry": {
             "location": {
                "lat": -27.5864465,
                "lng": -48.5505566
             },
             "viewport": {
                "northeast": {
                   "lat": -27.58498642010728,
                   "lng": -48.54925737010728
                },
                "southwest": {
                   "lat": -27.58768607989272,
                   "lng": -48.55195702989272
                }
             }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
          "id": "da5fc59f160e36562c0939382c39aef14354ab7e",
          "name": "Hotel Novotel Florianopolis",
          "photos": [
             {
                "height": 2592,
                "html_attributions": [
                   "<a href=\"https://maps.google.com/maps/contrib/104979105339779610968/photos\">Luis Guillermo Wiilches Santana</a>"
                ],
                "photo_reference": "CmRaAAAAHxBfhJ1RGJteSVZYhkzZzI6c0ZSEGKndX0qSIEvwZ54KaBBBugSwv_d6h9uIzIDCXYTDzEDjnUeP0CTZisyuSwHiiV6pFdSsKHIpQxwAc9xDQBRIvXPuQ_AZq-BDajHLEhAvmKF9604Y5QfEx8pnmX5ZGhQgRsOaO_knaQ9-6tqMs98c0e-PLA",
                "width": 4608
             }
          ],
          "place_id": "ChIJTbIXjxk4J5UR0YtL-wdLh1s",
          "plus_code": {
             "compound_code": "CC7X+CQ Centro, Florianópolis - State of Santa Catarina",
             "global_code": "584HCC7X+CQ"
          },
          "rating": 4.5,
          "reference": "ChIJTbIXjxk4J5UR0YtL-wdLh1s",
          "scope": "GOOGLE",
          "types": [
             "lodging",
             "restaurant",
             "food",
             "point_of_interest",
             "establishment"
          ],
          "user_ratings_total": 1269,
          "vicinity": "Av. Jorn. Rubéns de Arruda Ramos, 2034 - Centro, Florianópolis"
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
                "photo_reference": "CmRaAAAA7dK6LtYPEJXSpNDZo1OWiHV85s6ATQ_gQAelcr3oCwLK0Y11F9fnjf9pHTAt66yIV6FWq1sBzel74uuE2TXjsEjiK39YFpu4-gr5EsEzRClH2xHHA7npTmejMTRcQAX5EhAZsf8jQGQD0qyAdqQBda1ZGhQYGVQEaTWqFeASVvwE-VLaxZwUxg",
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
                "photo_reference": "CmRaAAAAO2t3OOh_2bzX4TVkBWf_NdIGpsC58JmhDN0CLecE6LBD3EFKdC5jXjv89FpQS4P8NLWSY7L3W-ZZ4HgZFHNgdTnxTHpSlfDEvV2P004RW97Ir23-8kGkSkB5cg5DThVBEhD3OXDcy7rek8GraCiLm__HGhRJjPpHjtuiRx_4HKa507ig2dmwew",
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
                "photo_reference": "CmRaAAAAKY_RysbjkXAM5O_xFYlCQXiAklXLPNZWz-T0T5LnYmoK4jP5PeEOnzonj_z8iMxJCgd4GHk7mvTnmTyPYW8c96KR9493X12oJ3rhj4uWbNOLWR54X_wspuVepQ9K5MW0EhB1iYW-3aXUW3hxd_6amFiPGhRUA18Q0CoqKv3I0OKx_d553fbY-w",
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
                "lat": -27.5905453,
                "lng": -48.5099199
             },
             "viewport": {
                "northeast": {
                   "lat": -27.58914537010728,
                   "lng": -48.50846067010728
                },
                "southwest": {
                   "lat": -27.59184502989272,
                   "lng": -48.51116032989272
                }
             }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "0b1ed9539066ec15fa1c281c355f4bd8cefaf295",
          "name": "Vai Valentina Ristorante",
          "opening_hours": {
             "open_now": false
          },
          "photos": [
             {
                "height": 720,
                "html_attributions": [
                   "<a href=\"https://maps.google.com/maps/contrib/102985089186680480014/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAAJGAFe6Vy5Y9al8EeNbGYR3z8Lc8zXn6f16_ecdgyK4d4pDqtqowVB_Q4pnsv5jxlkxs9UxwOVDLZhswRFE1WRQ_N9cxU85NXP1FYhgGHibonuTeSTGIoEO8jm0hQNx-SEhB6W86ctJAneZMJ4YLzU01lGhRPvJJBfhKlrS9VCT_kXek575WWVQ",
                "width": 960
             }
          ],
          "place_id": "ChIJpbgQX_s4J5URVDteJCn2mlI",
          "plus_code": {
             "compound_code": "CF5R+Q2 Santa Mônica - Destero, Florianópolis - State of Santa Catarina",
             "global_code": "584HCF5R+Q2"
          },
          "rating": 4.3,
          "reference": "ChIJpbgQX_s4J5URVDteJCn2mlI",
          "scope": "GOOGLE",
          "types": [
             "restaurant",
             "food",
             "point_of_interest",
             "establishment"
          ],
          "user_ratings_total": 83,
          "vicinity": "R. Neri Cardoso Bitencourt, 278 - Santa Monica, Florianópolis"
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
                "photo_reference": "CmRaAAAAiippRSd8yuTHjeHLQrBNCXMLCfrYSBjQB5IIiPBgsmrJ_ucWMfwJ9Ygf6XaPt0F4MJiq8USUA2okh7y7t3cAaNE9_c_WVUqyAu6YIwnRC-N6U21wq1jF-XXl1WKCGURFEhDr_ilclVihmcwwS0AzgjZwGhSYu7Bnw7MrxqyQljNQaPzq2IFY0w",
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
                "photo_reference": "CmRaAAAABX3WQbCXvxHLPG8723Lcv-yR9LufUSpTPkgUXZUmHrFfSaha3iV6-pqs7408ykpsxlygMFy7uNEBpP7yEZiKwZWiD9DbWXNg4apA0iWloGEryCvUmT42_ULWcDfnfDATEhCWHqDVejBt8BpTF-OvOjORGhQGYyDh7pLmsJ5sa2medGplLMDDgg",
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
                "photo_reference": "CmRaAAAADto6qzwH3MofREs78WJJF6G5cmL7nXYD0tGFYe0ywKlJD9VyQ9K9qeR4PyyXOfQuGMbCNcMRBDLlJNIDANIQUrLrwUQfYGuqlPVdDo3Ddk65byjrfFcXWv1Ho7QJta-vEhDCA8Q0XEpDJeiJ1RMaRPIgGhTzFTxesaTR2VFyvIw4gowXPefhXQ",
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
                "lat": -27.5914414,
                "lng": -48.5598278
             },
             "viewport": {
                "northeast": {
                   "lat": -27.59020487010728,
                   "lng": -48.55856717010727
                },
                "southwest": {
                   "lat": -27.59290452989272,
                   "lng": -48.56126682989272
                }
             }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "5f298bee19afc0a8371bac8022f63f7a5124de1d",
          "name": "Lindacap",
          "opening_hours": {
             "open_now": false
          },
          "photos": [
             {
                "height": 2574,
                "html_attributions": [
                   "<a href=\"https://maps.google.com/maps/contrib/104927611124129677011/photos\">Luci Leal</a>"
                ],
                "photo_reference": "CmRaAAAAPt27FjT1dRIaSt2nEe3lcyAao7BXv4WbZ-uNo2z9xHw_-iZoVxnULms--OWe8pmKG8UGW5hprmoHxPHYewqiAvPfYPZk-VDGywU6cg-otu1_hQYgAWly4y1l5p0ufQU-EhCwnLbFY82Whk3JU3zjqtVfGhSuvrJzKhqD1iB6lYeeGjBN5DzVDA",
                "width": 3861
             }
          ],
          "place_id": "ChIJAy4F3h84J5URS_GqhW4o0eA",
          "plus_code": {
             "compound_code": "CC5R+C3 Florianópolis, State of Santa Catarina",
             "global_code": "584HCC5R+C3"
          },
          "price_level": 3,
          "rating": 4.6,
          "reference": "ChIJAy4F3h84J5URS_GqhW4o0eA",
          "scope": "GOOGLE",
          "types": [
             "restaurant",
             "food",
             "point_of_interest",
             "establishment"
          ],
          "user_ratings_total": 833,
          "vicinity": "R. Felipe Schmidt, 1162 - Centro, Florianópolis"
       },
       {
          "geometry": {
             "location": {
                "lat": -27.5909769,
                "lng": -48.51388799999999
             },
             "viewport": {
                "northeast": {
                   "lat": -27.58954142010728,
                   "lng": -48.51258822010728
                },
                "southwest": {
                   "lat": -27.59224107989272,
                   "lng": -48.51528787989272
                }
             }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "1523b4e000e663d4f114b1ca31ffc2d42459428c",
          "name": "Wamaki Japonese Restaurant",
          "opening_hours": {
             "open_now": false
          },
          "photos": [
             {
                "height": 3456,
                "html_attributions": [
                   "<a href=\"https://maps.google.com/maps/contrib/114019608037593670350/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAASEur4Y7d7BZmYfzjr15gvYq2DGOrAR9MtCPtiBfsgZbZTkDnnZVjeKrcQnm2z2QjBrVA-g475Orco2TbPzAQf9LYWm8KmvusiGpHeWqsMsXw_z1O9oWrOHPZE_NTtLxrEhDaN5-rt3wRBt4PtL-FtQgHGhQaDSWLj2gceZtw9G3CaTrhxCEZbw",
                "width": 4608
             }
          ],
          "place_id": "ChIJSdErXPk4J5URU912ZKlbUVE",
          "plus_code": {
             "compound_code": "CF5P+JC Santa Mônica - Destero, Florianópolis - State of Santa Catarina",
             "global_code": "584HCF5P+JC"
          },
          "price_level": 3,
          "rating": 4.4,
          "reference": "ChIJSdErXPk4J5URU912ZKlbUVE",
          "scope": "GOOGLE",
          "types": [
             "restaurant",
             "food",
             "point_of_interest",
             "establishment"
          ],
          "user_ratings_total": 1102,
          "vicinity": "R. Clodorico Moreira, 67 - Santa Monica, Florianópolis"
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
                "photo_reference": "CmRaAAAABPcqfusk9FpHWmlKVvSXYFjP-wbqTW-7nmA9KWpnYUjnEzS0idfYJRWDuHbNXCRn1jDraMNJg9GEOz2_SF0TPsv-d5HaT4QqZqDAlTk852RHREqbp0VMJBXmyyBi8r33EhDlR-cgMUcSQ9p4JUut0oTPGhTOr3Jf-HlfbQZOC1oROCw7feCB8g",
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
       }
    ]
}
