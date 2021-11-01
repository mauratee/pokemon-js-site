from flask import Flask, render_template, session, g


# app = Flask(__name__, static_url_path='/src', static_folder='src')
app = Flask(__name__)

JS_TESTING_MODE = False

@app.before_request
def add_tests():
    g.jasmine_tests = JS_TESTING_MODE


@app.route("/")
def show_homepage():
    """Show the application index page"""

    return render_template("index.html")




if __name__ == "__main__":
    import sys
    if sys.argv[-1] == "jstest":
        JS_TESTING_MODE = True
        
    app.run(debug=True, host="0.0.0.0")