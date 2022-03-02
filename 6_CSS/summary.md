# (6) CSS

## Definisi

CSS adalah singkatan dari Cascading Style Sheets yang memiliki fungsi untuk menghias website dan mengatur layouting pada website.

## 3 Cara menaruh css

1. Internal

```
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
```

2. Inline

```
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
```

3. External
   index.html

```
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

mystyle.css

```
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

## CSS Selectors

1. Element

```
p {

}
h1 {

}
```

2. Class

```
.container{

}
.card{

}
```

3. Id

```
#header {

}

#carousel {

}
```
