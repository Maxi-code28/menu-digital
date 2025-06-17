from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="12345",
    database="restaurante_db"
)

@app.route('/api/menu', methods=['GET'])
def get_menu():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM menu_items")
    items = cursor.fetchall()
    cursor.close()
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)