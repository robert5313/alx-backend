#!/usr/bin/env python3
'''Module task 0.
'''
from flask import Flask, render_template


app = Flask(__name__)
app.url_map.strict_slashes = False


@app.route('/')
def get_index() -> str:
    """The home page.
    """
    return render_template('0-index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=4000)
