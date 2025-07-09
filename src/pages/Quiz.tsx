import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ]
    },
    {
      id: 2,
      text: "How often have you had little interest or pleasure in doing things?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ]
    },
    {
      id: 3,
      text: "How often have you felt nervous, anxious, or on edge?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ]
    },
    {
      id: 4,
      text: "How often have you had trouble sleeping or staying asleep?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ]
    },
    {
      id: 5,
      text: "How often have you felt tired or had little energy?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ]
    },
    {
      id: 6,
      text: "How often have you had difficulty concentrating on things?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ]
    },
    {
      id: 7,
      text: "How well have you been able to control or stop worrying?",
      options: [
        { text: "Very well", value: 0 },
        { text: "Fairly well", value: 1 },
        { text: "Not very well", value: 2 },
        { text: "Not at all", value: 3 }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getScore = () => {
    return answers.reduce((sum, answer) => sum + answer, 0);
  };

  const getResultLevel = (score: number) => {
    if (score <= 5) return 'minimal';
    if (score <= 10) return 'mild';
    if (score <= 15) return 'moderate';
    return 'severe';
  };

  const getResultInfo = (level: string) => {
    switch (level) {
      case 'minimal':
        return {
          title: 'Minimal Symptoms',
          description: 'Your responses suggest minimal mental health concerns. Continue practicing self-care and maintaining healthy habits.',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          recommendations: [
            'Continue regular exercise and healthy eating',
            'Practice mindfulness or meditation',
            'Maintain social connections',
            'Keep a consistent sleep schedule'
          ]
        };
      case 'mild':
        return {
          title: 'Mild Symptoms',
          description: 'Your responses suggest mild mental health concerns. Consider implementing some self-care strategies.',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          recommendations: [
            'Consider talking to a counselor or therapist',
            'Practice stress management techniques',
            'Increase physical activity',
            'Connect with supportive friends or family'
          ]
        };
      case 'moderate':
        return {
          title: 'Moderate Symptoms',
          description: 'Your responses suggest moderate mental health concerns. We recommend seeking professional support.',
          color: 'text-orange-600',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          recommendations: [
            'Schedule an appointment with a mental health professional',
            'Consider therapy or counseling',
            'Practice daily self-care activities',
            'Reach out to trusted friends or family'
          ]
        };
      case 'severe':
        return {
          title: 'Severe Symptoms',
          description: 'Your responses suggest significant mental health concerns. Please consider seeking immediate professional help.',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          recommendations: [
            'Contact a mental health professional immediately',
            'Consider calling a crisis helpline if needed',
            'Reach out to trusted friends or family for support',
            'Avoid being alone if possible'
          ]
        };
      default:
        return getResultInfo('minimal');
    }
  };

  const score = getScore();
  const resultLevel = getResultLevel(score);
  const resultInfo = getResultInfo(resultLevel);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete</h1>
            <p className="text-gray-600">Your mental health assessment results</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${resultInfo.bgColor} ${resultInfo.borderColor} border rounded-xl p-8 mb-8`}
          >
            <div className="text-center mb-6">
              <h2 className={`text-2xl font-bold ${resultInfo.color} mb-2`}>
                {resultInfo.title}
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Score: {score} out of {questions.length * 3}
              </p>
              <p className="text-gray-600">
                {resultInfo.description}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Next Steps:</h3>
              <ul className="space-y-2">
                {resultInfo.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Note</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This assessment is for informational purposes only and is not a substitute for professional medical advice, 
              diagnosis, or treatment. If you're experiencing thoughts of self-harm or suicide, please contact emergency 
              services or a crisis helpline immediately.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Retake Assessment
            </button>
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Find Professional Help
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mental Health Assessment</h1>
          <p className="text-gray-600">A brief questionnaire to help understand your current mental health</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 group-hover:text-blue-700">
                    {option.text}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            This assessment is for informational purposes only and does not replace professional medical advice.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;