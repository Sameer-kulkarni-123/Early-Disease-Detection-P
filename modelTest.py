import joblib
import numpy as np

rf_model = joblib.load('./model/random_forest_model.pkl')
le = joblib.load('./model/labelEncoder.pkl')

sample_input = np.random.randint(0, 2, (1, 50))  # Replace with real input values

prediction = rf_model.predict(sample_input)
prediction = le.inverse_transform(prediction)

print("Predicted Value:", prediction[0])
