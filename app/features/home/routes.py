from flask import render_template, request
from markupsafe import escape
from app.features.home import home_bp


@home_bp.route("/")
def index():
    return render_template("home/index.html")

@home_bp.route("/about")
def about():
    return "<h1>Acerca de Listo</h1><p>El proyecto base de ISIA.</p>"

@home_bp.route("/hello/<name>")
def hello(name):
    return f"Hola, {escape(name)}"

@home_bp.route("/hello")
def hello_query():
    name = request.args.get("name", "desconocido")
    return f"Hola, {escape(name)}"

def test_hello_in_the_path(client):
    assert client.get("/hello/Marta").get_data(as_text=True) == "Hola, Marta"
    
def test_hello_in_the_query_string(client):
    assert client.get("/hello?name=Marta").get_data(as_text=True) == "Hola, Marta"
    assert client.get("/hello").get_data(as_text=True) == "Hola, desconocido"

def test_hello_escapes_html(client):
    html = client.get("/hello?name=<b>Marta</b>").get_data(as_text=True)
    assert "<b>" not in html
    assert "&lt;b&gt;" in html



