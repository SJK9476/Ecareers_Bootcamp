#Flask, Django - Libraries for building web apps
from flask import Flask, render_template, request

app = Flask(__name__)

#creating routes
@app.route('/', methods=['GET'])
def renderLogin():
    return render_template('index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        #validate with hardcoded values
        if username == 'Samuel' and password == 'Jasmin4694!':
            return render_template('login-success.html')
        else:
            return render_template('login-failure.html')
        

if __name__ == '__main__':
    app.run()

