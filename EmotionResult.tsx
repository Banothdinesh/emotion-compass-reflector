import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, TrendingUp, Lightbulb } from "lucide-react";

interface EmotionResultProps {
  result: {
    emotion: string;
    confidence: number;
    insights: string[];
    color: string;
  };
}

export const EmotionResult: React.FC<EmotionResultProps> = ({ result }) => {
  const confidencePercentage = Math.round(result.confidence * 100);

  return (
    <div className="space-y-6">
      {/* Main Emotion Card */}
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${result.color}`}></div>
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Heart className="w-8 h-8 text-pink-500" />
            Your Emotion
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-gray-800">{result.emotion}</h3>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-lg text-gray-600">
                {confidencePercentage}% confidence
              </span>
            </div>
          </div>
          
          {/* Confidence Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${result.color} transition-all duration-1000 ease-out`}
              style={{ width: `${confidencePercentage}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      {/* Insights Card */}
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            Emotional Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {result.insights.map((insight, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-purple-400"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};