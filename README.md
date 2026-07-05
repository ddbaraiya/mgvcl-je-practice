<!DOCTYPE html>
<html lang="gu">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MGVCL JE Practice</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>⚡ MGVCL JE Practice Portal</h1>
    <p>Electrical | English | Gujarati | Reasoning</p>
</header>

<div class="container">

<div class="card">
<h2>Mock Tests</h2>

<button onclick="startTest('electrical')">
Electrical Engineering
</button>

<button onclick="startTest('english')">
English
</button>

<button onclick="startTest('gujarati')">
Gujarati
</button>

<button onclick="startTest('reasoning')">
Reasoning
</button>

</div>

<div id="quizBox" style="display:none;">

<h2 id="questionNo"></h2>

<h3 id="question"></h3>

<div id="options"></div>

<br>

<button onclick="previousQuestion()">Previous</button>

<button onclick="nextQuestion()">Next</button>

</div>

</div>

<script src="script.js"></script>

</body>
</html>
