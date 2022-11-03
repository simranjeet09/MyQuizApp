import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HardGameMode({ navigation }) {

    const [timerCount, setTimer] = useState(5);
    const [questioncount, setquestioncount] = useState(0);
    const [show, setshow] = useState(true);

    const [questiontodisplay, setquestiontodisplay] = useState('Your Question will appear here');
    const [displayedquestionanswers, setdisplayedquestionanswers] = useState();
    const [questionbanks,setquestionbanks] = useState();

    if (timerCount == 0) {
        if (questioncount > 9) {
            setTimer(-1);
            alert('Quiz is over');
            navigation.navigate('HomeScreen');
        } else {
            setquestioncount(questioncount + 1);
            setquestiontodisplay(questionbanks[questioncount].question);
            setdisplayedquestionanswers(questionbanks[questioncount].answers);
            setTimer(10);
            let interval = setInterval(() => {
                setTimer(lastTimerCount => {
                    lastTimerCount <= 1 && clearInterval(interval)
                    return lastTimerCount - 1
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    };

    // const FetchEasyQuestionsFromInternet = async () => {
        
    //   };



    useEffect(() => {
        async function myfun() {
            try {
                const response = await fetch(
                  'https://quizapi.io/api/v1/questions?apiKey=6M4lbRBLzZbcub4zUHOPsHjXl1kV3K2N3V82fvZF&category=code&difficulty=hard&limit=10'
                );
                const json = await response.json();
                setquestionbanks(json);
              } catch (error) {
                console.error(error);
              }
            setquestiontodisplay("Please wait while we are preparing your questions");
        }
        myfun();
        console.log("State Changed");
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                return lastTimerCount - 1
            })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.QuizInformationTopBar}>
                <View style={{ width: '50%' }}>
                    <Text style={styles.QuizInformationTopBarQuestionInfoText}>{questioncount} of 10</Text>
                </View>
                <View style={{ width: '50%' }}>
                    <Text style={styles.QuizInformationTopBarTimerText}>Timer: 00:{timerCount}</Text>
                </View>
            </View>
            <View style={styles.QuizInformationQuestionBody}>

                <View style={styles.QuizQuestion}>
                    <Text style={styles.QuizQuestionText}>{questiontodisplay}</Text>
                </View>

                <View style={styles.QuizQuestionAnswer}>

                    {(questioncount > 0) ? (

                        <View>

                            <TouchableOpacity style={styles.QuizQuestionAnswerOptionButton}>
                                <Text style={styles.QuizQuestionAnswerOptionButtonText}>{displayedquestionanswers["answer_a"]}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.QuizQuestionAnswerOptionButton}>
                                <Text style={styles.QuizQuestionAnswerOptionButtonText}>{displayedquestionanswers["answer_b"]}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.QuizQuestionAnswerOptionButton}>
                                <Text style={styles.QuizQuestionAnswerOptionButtonText}>{displayedquestionanswers["answer_c"]}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.QuizQuestionAnswerOptionButton}>
                                <Text style={styles.QuizQuestionAnswerOptionButtonText}>{displayedquestionanswers["answer_d"]}</Text>
                            </TouchableOpacity>


                        </View>

                    ) : null}

                </View>
            </View>

            <View style={styles.QuizSubmitAndCancelButton}>

                <TouchableOpacity style={styles.QuizSubmitAndCancelButtonCancel} onPress={() => { navigation.goBack() }}>
                    <Text style={styles.QuizSubmitAndCancelButtonCancelText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.QuizSubmitAndCancelButtonSubmit} onPress={() => { navigation.goBack() }} >
                    <Text style={styles.QuizSubmitAndCancelButtonSubmitText}>Submit</Text>
                </TouchableOpacity>



            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    QuizInformationTopBar: {
        flex: 1,
        flexDirection: 'row',
    },
    QuizInformationTopBarQuestionInfoText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'left',
    },
    QuizInformationTopBarTimerText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'right',
    },
    QuizInformationQuestionBody: {
        flex: 10,
        flexDirection: 'column'
    },
    QuizQuestion: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    QuizQuestionText: {
        fontSize: 19,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    QuizQuestionAnswer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    QuizQuestionAnswerOptionButton: {
        backgroundColor: '#2192FF',
        padding: 1,
        marginBottom: 5,
        height: 35,
        borderRadius: 8,
        justifyContent: 'center',
        width: '100%',
    },
    QuizQuestionAnswerOptionButtonText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
    },
    QuizSubmitAndCancelButton: {
        flex: 3,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    QuizSubmitAndCancelButtonCancelText: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },
    QuizSubmitAndCancelButtonSubmitText: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },
    QuizSubmitAndCancelButtonCancel: {
        width: '40%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#277BC0',
    },
    QuizSubmitAndCancelButtonSubmit: {
        width: '40%',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#7FB77E',
    },

});