import * as React from 'react';
import { useState, useEffect } from 'react';

const  GetEasyQuiz = async() => {
    var result;
    try {
        const response = await fetch(
            'https://quizapi.io/api/v1/questions?apiKey=6M4lbRBLzZbcub4zUHOPsHjXl1kV3K2N3V82fvZF&category=code&difficulty=easy&limit=10'
        );
        const json = await response.json();
        console.log(json);
        resolve(json);
      } catch (error) {
        console.error(error);
        reject("Error: " + error.message);
      }
      return result;
};

module.exports = {GetEasyQuiz};
