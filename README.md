# WeatherAPP API DOC

### **[HackMD版本](https://hackmd.io/MwNgxgJgrMCMIFowAYzAQFgEbKggnBNAgOywnLABMwAhiQGYAc+QA===?view)**
---

+ Task list
  - [Task1](#task1)
  - [Task2](#task2)
  - [Task3](#task3)
  - [Task4](#task4)

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
