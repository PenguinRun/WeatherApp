# WeatherAPP API DOC

### **[HackMD版本](https://hackmd.io/MwNgxgJgrMCMIFowAYzAQFgEbKggnBNAgOywnLABMwAhiQGYAc+QA===?view)**
---

+ Task list
  - [Task1](#task1)
  - [Task2](#task2)
  - [Task3](#task3)
  - [Task4](#task4)
  - [Task5](#task5)
  - [Task6](#task6)

## Task1

+ 內容：使用 get method 將參數放在 url 中傳給伺服器，並將伺服器回傳的結果顯示在 app 中。

>__<font color=green>GET</font>__ https://penguinweather.herokuapp.com/Task1


|query參數|類型|描述|
|:------:|:--:|:--:|
|id<font color=red>(必填)</font>|Int|query參數，取得id資料|

---

可使用下述例子進行測試
https://penguinweather.herokuapp.com/Task1/?id=1



<font color=#0066FF>

#### Success 200
</font>

Response

Content-Type: application/json

```javascript=
{
  "weatherData": {
    "place": {
      "areaName": "台南",
      "placeName": "永康"
    },
    "weatherName": "陰天",
    "dateTime": {
      "date": "2017-2-7",
      "time": "19:00"
    },
    "temperature": 18,
    "rainfall": 20.5,
    "imgURL": "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
  },
  "err": ""
}

```

---
<font color=CC0000>

#### Error 400(Bad Request)
</font>

```javascript=
{"err":"sorry, your query id is not equal 1, please change the query id"}
```

_[Go Top](#weatherapp-api-doc)_

## Task2

+ 內容：
 將參數放在 header 中傳給伺服器，並將伺服器回傳的結果顯示在 app 中。

+ 必驗收項目：
  - iOS：
    - 呼叫一次API，從伺服器得到圖片路徑後，再將圖片下載下來並呈現在 app 中。


>__<font color=green>GET</font>__ https://penguinweather.herokuapp.com/Task2


|header參數|類型|描述|
|:------:|:--:|:--:|
|id<font color=red>(必填)</font>|String|header參數，取得id資料|

---

可使用下述例子進行測試：
+ header參數”id”設為1的情況下

<font color=#0066FF>

#### Success 200
</font>

Response

Content-Type: application/json

```javascript=
{
  "weatherData": {
    "place": {
      "areaName": "台南",
      "placeName": "永康"
    },
    "weatherName": "陰天",
    "dateTime": {
      "date": "2017-2-7",
      "time": "19:00"
    },
    "temperature": 18,
    "rainfall": 20.5,
    "imgURL": "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
  },
  "err": ""
}
```


<font color=CC0000>

#### Error 400(Bad Request)
</font>

```javascript=
{"err":"sorry, your header id is not equal 1, please change the header id"}
```

_[Go Top](#weatherapp-api-doc)_

## Task3

+ 內容：將參數以 JSON 的形式放在 http request 的 body 中傳給伺服器，並將伺服器回傳的結果顯示在 app 中。

>__<font color=#000088>POST</font>__ https://penguinweather.herokuapp.com/Task3

|body參數|類型|傳輸格式|描述|
|:------:|:--:|:--:|:--:|
|place<font color=red>(必填)</font>|String|x-www-form-urlencoded|地名|

---

<font color=#0066FF>

#### Success 200
</font>


Request
```javascript=
{
 "place": "永康"
}
```

Response

Content-Type: application/json

```javascript=
{
  "result": "您剛剛輸入的地點是[永康]!",
  "weatherData": {
    "place": {
      "areaName": "台南",
      "placeName": "永康"
    },
    "weatherName": "陰天",
    "dateTime": {
      "date": "2017-2-7",
      "time": "19:00"
    },
    "temperature": 18,
    "rainfall": 20.5,
    "imgURL": "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
  },
  "err": ""
}
```


<font color=CC0000>

#### Error 404(Not Found)
</font>

```javascript=
{"err":"sorry, 沒有place為[:place]的資料，請輸入[永康]試試看。"}
```

_[Go Top](#weatherapp-api-doc)_

## Task4

+ 內容：
  將參數以 multipart/form-data 的形式放在 http request 的 body 中傳給伺服器，並將伺服器回傳的結果顯示在 app 中。
+ 必驗收項目：
   - 後端： 需以 JSON 格式回傳至少 5 組 key/value，回傳的資料至少需有 2 層以上的巢狀結構。

>__<font color=#000088>POST</font>__ https://penguinweather.herokuapp.com/Task4

|body參數|類型|傳輸格式|描述|
|:------:|:--:|:--:|:--:|
|place<font color=red>(必填)</font>|String|form-data|地名|

---

<font color=#0066FF>

#### Success 200
</font>

Request
```javascript=
{
  "place": "永康"
}
```


Response

Content-Type: application/json

```javascript=
{
  "result": "您剛剛輸入的地點是[永康]!",
  "weatherData": {
    "place": {
      "areaName": "台南",
      "placeName": "永康"
    },
    "weatherName": "陰天",
    "dateTime": {
      "date": "2017-2-7",
      "time": "19:00"
    },
    "temperature": 18,
    "rainfall": 20.5,
    "imgURL": "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
  },
  "err": ""
}
```


<font color=CC0000>

#### Error 404(Not Found)
</font>

```javascript=
{"err":"sorry, 沒有place為[:place]的資料，請輸入[永康]試試看。"}
```

_[Go Top](#weatherapp-api-doc)_

## Task5

+ 內容：
  - 製作一個 app，讓使用者使用相機照相、或是從手機照片庫中選一張照片，然後將照片傳給伺服器。
  - 傳送照片的時候，需同時在 body 中傳送另外 6 組參數。
  - 後端要讓 iOS 知道是否有送成功。

+ 必驗收項目：
  - iOS：
     - 不可以使用重覆貼 code 的方式把 code 弄得很醜。
     - 不可以使用第三方套件。


>__<font color=#000088>POST</font>__ https://penguinweather.herokuapp.com/Task5


|body參數|類型|傳輸格式|描述|
|:------:|:--:|:--:|:--:|
|weatherName<font color=red>(必填)</font>|String|form-data|天氣名稱|
|weatherPlace<font color=red>(必填)</font>|String|form-data|地點|
|weatherDate<font color=red>(必填)</font>|String|form-data|日期（如：2017/01/01）|
|weatherTime<font color=red>(必填)</font>|String|form-data|時間（如：16:00）|
|temperature<font color=red>(必填)</font>|Int|form-data|溫度|
|rainfall<font color=red>(必填)</font>|Double|form-data|降雨率|
|imgData<font color=red>(必填)</font>|File|form-data|欲上傳的檔案|

__Note__
檔案大小上限：3MB。

<font color=#0066FF>

---

#### Success 200
</font>

Request
```javascript=
{
    "weatherName": "陰天",
    "weatherPlace": "台南",
    "weatherDate": "2017/02/26",
    "weatherTime": "20:30",
    "temperature": "15",
    "rainfall": "20",
    "imgData": "" //欲上傳的檔案
}
```

Response
Content-Type: application/json
```javascript=
{
  "result": "上傳成功！您剛剛傳的檔案為 [1.png]",
  "weatherInfo": {
    "weatherName": "陰天",
    "weatherPlace": "台南",
    "weatherDate": "2017/3/3",
    "weatherTime": "15:00",
    "temperature": "40",
    "rainfall": "12.2"
  },
  "err": ""
}
```


<font color=CC0000>

#### Error 404(Bad Request)
</font>

若無圖片上傳，也就是沒有[imgData]的話

```javascript=
{
  "err": "please choose a file to upload!"
}
```

若檔案超過3MB的話

```javascript=
{
  "err": "請上傳小於3MB的檔案"
}
```

若其它參數值沒有輸入

```javascript=
{
  "err": "please enter the [:body參數] value"
}
```

若輸入的參數值型態其類型未符合要求

```javascript=
{
  "err": "please enter the type of :type value in [:body參數]."
}
```


_[Go Top](#weatherapp-api-doc)_

## Task6

- 內容：
  - 從伺服器下載一個大圖檔（> 10 mb），下載完成前用 loading indicator 顯示下載狀態，並在 app 中提供一個按鈕，可讓使用者隨時取消下載 task。


>__<font color=green>GET</font>__ https://penguinweather.herokuapp.com/Task6


__在該API中所使用的圖片有16MB__

<font color=#0066FF>

---

#### Success 200
</font>

Response
Content-Type: application/json
```javascript=
{
  "imgURL": "https://penguinweather.herokuapp.com/sunrisePhoto.jpg",
  "err": ""
}
```



_[Go Top](#weatherapp-api-doc)_
