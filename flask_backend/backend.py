from flask import Flask, request, jsonify
from flask_cors import CORS  # To allow cross-origin requests from React
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/receive-array', methods=['POST'])
def receive_array():

    availableSymptoms = {
        'muscle_pain': 0, 'dark_urine': 1, 'joint_pain': 2, 'chest_pain': 3, 'fatigue': 4, 'itching': 5,
        'yellowing_of_eyes': 6, 'nausea': 7, 'high_fever': 8, 'family_history': 9,
        'loss_of_appetite': 10, 'mild_fever': 11, 'altered_sensorium': 12, 'mucoid_sputum': 13,
        'abdominal_pain': 14, 'vomiting': 15, 'muscle_weakness': 16, 'lack_of_concentration': 17,
        'stomach_pain': 18, 'diarrhoea': 19, 'headache': 20, 'sweating': 21, 'yellowish_skin': 22,
        'weight_loss': 23, 'unsteadiness': 24, 'pain_behind_the_eyes': 25, 'bladder_discomfort': 26,
        'loss_of_balance': 27, 'breathlessness': 28, 'stomach_bleeding': 29, 'phlegm': 30,
        'dischromic_patches': 31, 'sunken_eyes': 32, 'malaise': 33, 'slurred_speech': 34,
        'continuous_feel_of_urine': 35, 'neck_pain': 36, 'back_pain': 37, 'coma': 38,
        'nodal_skin_eruptions': 39, 'rusty_sputum': 40, 'chills': 41, 'burning_micturition': 42,
        'passage_of_gases': 43, 'internal_itching': 44, 'increased_appetite': 45, 'blister': 46,
        'cough': 47, 'movement_stiffness': 48, 'red_sore_around_nose': 49
    }


    data = request.json  # Get JSON data from request
    list1 = data.get('data', [])  # Extract the array

    # Process data if needed
    print("Received array:", list1)
    

    arr = [0] * 50

    for item in list1:
        arr[availableSymptoms[item]] = 1

    arrToBeSent = np.array(arr) 
    arrToBeSent = arrToBeSent.reshape(1,-1)

    



    rf_model = joblib.load('./model/random_forest_model.pkl')
    le = joblib.load('./model/labelEncoder.pkl')

    prediction = rf_model.predict(arrToBeSent)
    prediction = le.inverse_transform(prediction)


    print("Predicted Value:", prediction[0])

    result = str(prediction[0])
    print(result)

    list2 = [result]





    return jsonify({"message": "Data received successfully", "received": list2})

if __name__ == '__main__':
    app.run(debug=True)
