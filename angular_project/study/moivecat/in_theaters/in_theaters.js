(function(angular){
    /**
    * moivecat.inteaters Module
    *
    * Description
    */
   var data={
  "count": 20,
  "start": 0,
  "total": 22,
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 5.8,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动作"
      ],
      "title": "绝地逃亡",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1054531/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/694.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/694.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/694.jpg"
          },
          "name": "成龙",
          "id": "1054531"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1050059/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1691.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1691.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1691.jpg"
          },
          "name": "范冰冰",
          "id": "1050059"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1031900/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1410111501.75.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1410111501.75.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1410111501.75.jpg"
          },
          "name": "约翰尼·诺克斯维尔",
          "id": "1031900"
        }
      ],
      "collect_count": 12434,
      "original_title": "Skiptrace",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1032052/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/21181.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/21181.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/21181.jpg"
          },
          "name": "雷尼·哈林",
          "id": "1032052"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2366057661.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2366057661.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2366057661.jpg"
      },
      "alt": "https://movie.douban.com/subject/24529353/",
      "id": "24529353"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.2,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "动作",
        "冒险"
      ],
      "title": "泰山归来：险战丛林",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1049485/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/427.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/427.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/427.jpg"
          },
          "name": "亚历山大·斯卡斯加德",
          "id": "1049485"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1272303/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1389939796.3.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1389939796.3.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1389939796.3.jpg"
          },
          "name": "玛格特·罗比",
          "id": "1272303"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1054408/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/31870.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/31870.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/31870.jpg"
          },
          "name": "塞缪尔·杰克逊",
          "id": "1054408"
        }
      ],
      "collect_count": 9109,
      "original_title": "The Legend of Tarzan",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1275147/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/9900.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/9900.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/9900.jpg"
          },
          "name": "大卫·叶茨",
          "id": "1275147"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2367559705.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2367559705.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2367559705.jpg"
      },
      "alt": "https://movie.douban.com/subject/2131669/",
      "id": "2131669"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.2,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动画"
      ],
      "title": "哆啦A梦：新·大雄的日本诞生",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1024195/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1375424738.93.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1375424738.93.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1375424738.93.jpg"
          },
          "name": "水田山葵",
          "id": "1024195"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1326329/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1358580306.49.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1358580306.49.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1358580306.49.jpg"
          },
          "name": "大原惠美",
          "id": "1326329"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1020284/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/36838.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/36838.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/36838.jpg"
          },
          "name": "嘉数由美",
          "id": "1020284"
        }
      ],
      "collect_count": 7183,
      "original_title": "ドラえもん 新・のび太の日本誕生",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1342622/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1469190483.72.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1469190483.72.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1469190483.72.jpg"
          },
          "name": "八锹新之介",
          "id": "1342622"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2366428288.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2366428288.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2366428288.jpg"
      },
      "alt": "https://movie.douban.com/subject/26527993/",
      "id": "26527993"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.1,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "动作",
        "犯罪"
      ],
      "title": "寒战2",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1041390/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/29009.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/29009.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/29009.jpg"
          },
          "name": "郭富城",
          "id": "1041390"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1118167/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/746.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/746.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/746.jpg"
          },
          "name": "梁家辉",
          "id": "1118167"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1018373/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/34983.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/34983.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/34983.jpg"
          },
          "name": "杨采妮",
          "id": "1018373"
        }
      ],
      "collect_count": 67083,
      "original_title": "寒战2",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1318764/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1360085887.8.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1360085887.8.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1360085887.8.jpg"
          },
          "name": "梁乐民",
          "id": "1318764"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1318745/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/44277.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/44277.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/44277.jpg"
          },
          "name": "陆剑青",
          "id": "1318745"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2360072346.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2360072346.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2360072346.jpg"
      },
      "alt": "https://movie.douban.com/subject/20505982/",
      "id": "20505982"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.7,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "爱情"
      ],
      "title": "天亮之前",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1041390/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/29009.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/29009.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/29009.jpg"
          },
          "name": "郭富城",
          "id": "1041390"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1312862/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1429449422.48.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1429449422.48.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1429449422.48.jpg"
          },
          "name": "杨子姗",
          "id": "1312862"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1042568/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/13664.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/13664.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/13664.jpg"
          },
          "name": "郝蕾",
          "id": "1042568"
        }
      ],
      "collect_count": 3962,
      "original_title": "天亮之前",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1313736/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1389112994.03.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1389112994.03.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1389112994.03.jpg"
          },
          "name": "吴中天",
          "id": "1313736"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2363294351.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2363294351.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2363294351.jpg"
      },
      "alt": "https://movie.douban.com/subject/26352440/",
      "id": "26352440"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.6,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "动画",
        "奇幻"
      ],
      "title": "大鱼海棠",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1317669/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/40762.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/40762.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/40762.jpg"
          },
          "name": "季冠霖",
          "id": "1317669"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1359405/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/WIKS8AOCFswcel_avatar_uploaded1467211365.31.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/WIKS8AOCFswcel_avatar_uploaded1467211365.31.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/WIKS8AOCFswcel_avatar_uploaded1467211365.31.jpg"
          },
          "name": "苏尚卿",
          "id": "1359405"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1354503/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1461493374.02.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1461493374.02.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1461493374.02.jpg"
          },
          "name": "许魏洲",
          "id": "1354503"
        }
      ],
      "collect_count": 127166,
      "original_title": "大鱼海棠",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1345277/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1460964362.8.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1460964362.8.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1460964362.8.jpg"
          },
          "name": "梁旋",
          "id": "1345277"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1345278/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1460964476.18.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1460964476.18.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1460964476.18.jpg"
          },
          "name": "张春",
          "id": "1345278"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2361744534.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2361744534.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2361744534.jpg"
      },
      "alt": "https://movie.douban.com/subject/5045678/",
      "id": "5045678"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.4,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "喜剧",
        "爱情"
      ],
      "title": "陆垚知马俐",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1315866/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/33945.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/33945.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/33945.jpg"
          },
          "name": "包贝尔",
          "id": "1315866"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1042341/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/23241.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/23241.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/23241.jpg"
          },
          "name": "宋佳",
          "id": "1042341"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1312699/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1414489207.88.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1414489207.88.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1414489207.88.jpg"
          },
          "name": "朱亚文",
          "id": "1312699"
        }
      ],
      "collect_count": 15294,
      "original_title": "陆垚知马俐",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1011513/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1218.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1218.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1218.jpg"
          },
          "name": "文章",
          "id": "1011513"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2361036748.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2361036748.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2361036748.jpg"
      },
      "alt": "https://movie.douban.com/subject/25849006/",
      "id": "25849006"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.2,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "动作",
        "历史",
        "冒险"
      ],
      "title": "巴霍巴利王：开端",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1337710/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/KneBVU7FdSscel_avatar_uploaded1391068830.54.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/KneBVU7FdSscel_avatar_uploaded1391068830.54.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/KneBVU7FdSscel_avatar_uploaded1391068830.54.jpg"
          },
          "name": "帕拉巴斯",
          "id": "1337710"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1350818/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1437830956.04.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1437830956.04.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1437830956.04.jpg"
          },
          "name": "拉纳·达格巴提",
          "id": "1350818"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1182849/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1360479516.97.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1360479516.97.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1360479516.97.jpg"
          },
          "name": "特曼娜·芭蒂亚",
          "id": "1182849"
        }
      ],
      "collect_count": 9050,
      "original_title": "Baahubali: The Beginning",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1325290/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/VUhhcCTzVhIcel_avatar_uploaded1353924831.96.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/VUhhcCTzVhIcel_avatar_uploaded1353924831.96.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/VUhhcCTzVhIcel_avatar_uploaded1353924831.96.jpg"
          },
          "name": "S·S·拉贾穆里",
          "id": "1325290"
        }
      ],
      "year": "2015",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2363089554.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2363089554.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2363089554.jpg"
      },
      "alt": "https://movie.douban.com/subject/25753326/",
      "id": "25753326"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.7,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "悬疑",
        "惊悚",
        "恐怖"
      ],
      "title": "魔都凶音",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1323786/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1427712239.94.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1427712239.94.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1427712239.94.jpg"
          },
          "name": "姜雯",
          "id": "1323786"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1314386/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1422338246.39.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1422338246.39.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1422338246.39.jpg"
          },
          "name": "于小伟",
          "id": "1314386"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1318734/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1373771162.41.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1373771162.41.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1373771162.41.jpg"
          },
          "name": "张瑶",
          "id": "1318734"
        }
      ],
      "collect_count": 239,
      "original_title": "魔都凶音",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1329298/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/QI6QZBYIwQcel_avatar_uploaded1369280790.87.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/QI6QZBYIwQcel_avatar_uploaded1369280790.87.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/QI6QZBYIwQcel_avatar_uploaded1369280790.87.jpg"
          },
          "name": "彭鹏华",
          "id": "1329298"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2368369097.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2368369097.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2368369097.jpg"
      },
      "alt": "https://movie.douban.com/subject/26772860/",
      "id": "26772860"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.6,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情",
        "犯罪",
        "悬疑"
      ],
      "title": "惊天大逆转",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274318/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1446219063.11.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1446219063.11.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1446219063.11.jpg"
          },
          "name": "钟汉良",
          "id": "1274318"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1109907/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1918.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1918.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1918.jpg"
          },
          "name": "李政宰",
          "id": "1109907"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1330484/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1372053646.57.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1372053646.57.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1372053646.57.jpg"
          },
          "name": "郎月婷",
          "id": "1330484"
        }
      ],
      "collect_count": 21597,
      "original_title": "惊天大逆转",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1320190/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/54139.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/54139.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/54139.jpg"
          },
          "name": "李骏",
          "id": "1320190"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2363070684.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2363070684.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2363070684.jpg"
      },
      "alt": "https://movie.douban.com/subject/26375609/",
      "id": "26375609"
    },
    {
      "rating": {
        "max": 10,
        "average": 6,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "冒险"
      ],
      "title": "刺猬小子之天生我刺",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1359405/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/WIKS8AOCFswcel_avatar_uploaded1467211365.31.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/WIKS8AOCFswcel_avatar_uploaded1467211365.31.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/WIKS8AOCFswcel_avatar_uploaded1467211365.31.jpg"
          },
          "name": "苏尚卿",
          "id": "1359405"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1360207/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "汤水雨",
          "id": "1360207"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1329887/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1370588849.4.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1370588849.4.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1370588849.4.jpg"
          },
          "name": "路知行",
          "id": "1329887"
        }
      ],
      "collect_count": 436,
      "original_title": "刺猬小子之天生我刺",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1355172/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1469172903.01.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1469172903.01.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1469172903.01.jpg"
          },
          "name": "黄健明",
          "id": "1355172"
        }
      ],
      "year": "2015",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2368374902.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2368374902.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2368374902.jpg"
      },
      "alt": "https://movie.douban.com/subject/26276436/",
      "id": "26276436"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.4,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动作",
        "科幻"
      ],
      "title": "忍者神龟2：破影而出",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1044700/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/38771.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/38771.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/38771.jpg"
          },
          "name": "梅根·福克斯",
          "id": "1044700"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1212071/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1352540287.48.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1352540287.48.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1352540287.48.jpg"
          },
          "name": "斯蒂芬·阿梅尔",
          "id": "1212071"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1044709/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/7197.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/7197.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/7197.jpg"
          },
          "name": "威尔·阿奈特",
          "id": "1044709"
        }
      ],
      "collect_count": 26759,
      "original_title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1344470/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1467555399.62.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1467555399.62.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1467555399.62.jpg"
          },
          "name": "戴夫·格林",
          "id": "1344470"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2357111716.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2357111716.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2357111716.jpg"
      },
      "alt": "https://movie.douban.com/subject/25955779/",
      "id": "25955779"
    },
    {
      "rating": {
        "max": 10,
        "average": 2.8,
        "stars": "15",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情"
      ],
      "title": "泡沫之夏",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1347985/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/BrbnU9r7uewcel_avatar_uploaded1423890664.7.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/BrbnU9r7uewcel_avatar_uploaded1423890664.7.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/BrbnU9r7uewcel_avatar_uploaded1423890664.7.jpg"
          },
          "name": "黄灿灿",
          "id": "1347985"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1313369/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/48629.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/48629.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/48629.jpg"
          },
          "name": "罗仲谦",
          "id": "1313369"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1351757/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1454673455.23.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1454673455.23.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1454673455.23.jpg"
          },
          "name": "严禹豪",
          "id": "1351757"
        }
      ],
      "collect_count": 1604,
      "original_title": "泡沫之夏",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1339538/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1422791828.94.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1422791828.94.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1422791828.94.jpg"
          },
          "name": "赖俊羽",
          "id": "1339538"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2363746233.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2363746233.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2363746233.jpg"
      },
      "alt": "https://movie.douban.com/subject/25830800/",
      "id": "25830800"
    },
    {
      "rating": {
        "max": 10,
        "average": 4,
        "stars": "20",
        "min": 0
      },
      "genres": [
        "犯罪",
        "悬疑",
        "恐怖"
      ],
      "title": "恐怖爱情故事之死亡公路",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1357832/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1468241809.03.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1468241809.03.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1468241809.03.jpg"
          },
          "name": "牟雨晨",
          "id": "1357832"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1356542/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1463467468.93.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1463467468.93.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1463467468.93.jpg"
          },
          "name": "冯可",
          "id": "1356542"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1357834/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "高名扬",
          "id": "1357834"
        }
      ],
      "collect_count": 136,
      "original_title": "恐怖爱情故事之死亡公路",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1336003/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1384226190.51.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1384226190.51.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1384226190.51.jpg"
          },
          "name": "鸿水",
          "id": "1336003"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2367899630.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2367899630.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2367899630.jpg"
      },
      "alt": "https://movie.douban.com/subject/26609224/",
      "id": "26609224"
    },
    {
      "rating": {
        "max": 10,
        "average": 4,
        "stars": "20",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情"
      ],
      "title": "致青春·原来你还在这里",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1337000/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1401722517.74.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1401722517.74.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1401722517.74.jpg"
          },
          "name": "吴亦凡",
          "id": "1337000"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1049732/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/38640.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/38640.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/38640.jpg"
          },
          "name": "刘亦菲",
          "id": "1049732"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1313839/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1447690474.87.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1447690474.87.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1447690474.87.jpg"
          },
          "name": "金世佳",
          "id": "1313839"
        }
      ],
      "collect_count": 31642,
      "original_title": "致青春·原来你还在这里",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1349109/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1433947629.21.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1433947629.21.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1433947629.21.jpg"
          },
          "name": "周拓如",
          "id": "1349109"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2364795527.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2364795527.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2364795527.jpg"
      },
      "alt": "https://movie.douban.com/subject/26290642/",
      "id": "26290642"
    },
    {
      "rating": {
        "max": 10,
        "average": 2.7,
        "stars": "15",
        "min": 0
      },
      "genres": [
        "惊悚",
        "恐怖"
      ],
      "title": "笔仙撞碟仙",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1353667/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1451209491.55.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1451209491.55.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1451209491.55.jpg"
          },
          "name": "姜星丘",
          "id": "1353667"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1353668/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "申彩儿",
          "id": "1353668"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1353669/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "刘小奇",
          "id": "1353669"
        }
      ],
      "collect_count": 679,
      "original_title": "笔仙撞碟仙",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1353666/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "摩撒利",
          "id": "1353666"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2364446683.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2364446683.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2364446683.jpg"
      },
      "alt": "https://movie.douban.com/subject/26694683/",
      "id": "26694683"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.9,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "动画",
        "音乐"
      ],
      "title": "摇滚藏獒",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274305/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/6569.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/6569.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/6569.jpg"
          },
          "name": "郭德纲",
          "id": "1274305"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1357104/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/81GBntXxTXMcel_avatar_uploaded1461565759.8.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/81GBntXxTXMcel_avatar_uploaded1461565759.8.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/81GBntXxTXMcel_avatar_uploaded1461565759.8.jpg"
          },
          "name": "郭麒麟",
          "id": "1357104"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274307/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/4826.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/4826.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/4826.jpg"
          },
          "name": "于谦",
          "id": "1274307"
        }
      ],
      "collect_count": 3712,
      "original_title": "摇滚藏獒",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1279193/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/48398.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/48398.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/48398.jpg"
          },
          "name": "艾什·布兰农",
          "id": "1279193"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2364347016.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2364347016.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2364347016.jpg"
      },
      "alt": "https://movie.douban.com/subject/25749813/",
      "id": "25749813"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.5,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧",
        "动作"
      ],
      "title": "赏金猎人",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1009849/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1385139628.16.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1385139628.16.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1385139628.16.jpg"
          },
          "name": "李敏镐",
          "id": "1009849"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274318/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/1446219063.11.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/1446219063.11.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/1446219063.11.jpg"
          },
          "name": "钟汉良",
          "id": "1274318"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274479/",
          "avatars": {
            "small": "http://img3.douban.com/img/celebrity/small/48044.jpg",
            "large": "http://img3.douban.com/img/celebrity/large/48044.jpg",
            "medium": "http://img3.douban.com/img/celebrity/medium/48044.jpg"
          },
          "name": "唐嫣",
          "id": "1274479"
        }
      ],
      "collect_count": 11675,
      "original_title": "赏金猎人",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1322348/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1463051310.97.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1463051310.97.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1463051310.97.jpg"
          },
          "name": "申太罗",
          "id": "1322348"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2358403173.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2358403173.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2358403173.jpg"
      },
      "alt": "https://movie.douban.com/subject/21941770/",
      "id": "21941770"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.3,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧",
        "动画"
      ],
      "title": "超能太阳鸭",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1096566/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1446029080.68.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1446029080.68.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1446029080.68.jpg"
          },
          "name": "迈克尔·格罗斯",
          "id": "1096566"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1345304/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "杰西·科尔蒂",
          "id": "1345304"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1090866/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "马克·戴卡洛",
          "id": "1090866"
        }
      ],
      "collect_count": 466,
      "original_title": "Крякнутые каникулы",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1026699/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "维克多·拉基索夫",
          "id": "1026699"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2364994407.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2364994407.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2364994407.jpg"
      },
      "alt": "https://movie.douban.com/subject/26341315/",
      "id": "26341315"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.2,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动作"
      ],
      "title": "快手枪手快枪手",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1314535/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1399987210.67.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1399987210.67.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1399987210.67.jpg"
          },
          "name": "林更新",
          "id": "1314535"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1016668/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/146.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/146.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/146.jpg"
          },
          "name": "张静初",
          "id": "1016668"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1299052/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/38576.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/38576.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/38576.jpg"
          },
          "name": "腾格尔",
          "id": "1299052"
        }
      ],
      "collect_count": 3913,
      "original_title": "快手枪手快枪手",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1317863/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1369798433.8.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1369798433.8.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1369798433.8.jpg"
          },
          "name": "潘安子",
          "id": "1317863"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2361644304.jpg",
        "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2361644304.jpg",
        "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2361644304.jpg"
      },
      "alt": "https://movie.douban.com/subject/26219893/",
      "id": "26219893"
    }
  ],
  "title": "正在上映的电影-北京"
};
    angular.module('moivecat.in_theaters', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/in_theaters', {
      templateUrl: './in_theaters/view.html',
      controller: 'In_TheatersCtrl'
    });
  }]).controller('In_TheatersCtrl', ['$scope', function($scope){
        $scope.title='正在热映';
        $scope.data=data.subjects;
    }])
})(angular)