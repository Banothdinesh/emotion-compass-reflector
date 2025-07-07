// Mock emotion analysis service that simulates a Python backend API
export interface EmotionAnalysis {
  emotion: string;
  confidence: number;
  insights: string[];
  color: string;
}

export class EmotionAnalysisService {
  private static emotions = [
    {
      keywords: ['nervous', 'anxious', 'worried', 'stress', 'fear', 'scared'],
      emotion: 'Anxious',
      color: 'from-yellow-400 to-orange-500',
      insights: [
        'Anxiety is natural when facing new challenges',
        'Deep breathing can help calm your nerves',
        'Remember that growth happens outside your comfort zone'
      ]
    },
    {
      keywords: ['happy', 'joy', 'excited', 'great', 'amazing', 'wonderful'],
      emotion: 'Joyful',
      color: 'from-green-400 to-blue-500',
      insights: [
        'Joy is a powerful emotion that energizes us',
        'Sharing happiness with others amplifies it',
        'Savor these positive moments'
      ]
    },
    {
      keywords: ['sad', 'down', 'depressed', 'lonely', 'hurt', 'pain'],
      emotion: 'Melancholic',
      color: 'from-blue-400 to-purple-500',
      insights: [
        'Sadness is a valid emotion that deserves acknowledgment',
        'Reaching out to others can provide comfort',
        'This feeling will pass with time'
      ]
    },
    {
      keywords: ['angry', 'mad', 'frustrated', 'annoyed', 'irritated'],
      emotion: 'Frustrated',
      color: 'from-red-400 to-pink-500',
      insights: [
        'Anger often masks other emotions like hurt or fear',
        'Taking a pause can help you respond rather than react',
        'Consider what boundaries might need to be set'
      ]
    },
    {
      keywords: ['confused', 'lost', 'uncertain', 'doubt', 'unclear'],
      emotion: 'Uncertain',
      color: 'from-purple-400 to-indigo-500',
      insights: [
        'Uncertainty is part of the human experience',
        'Sometimes not knowing opens us to new possibilities',
        'Trust that clarity will come with time'
      ]
    },
    {
      keywords: ['love', 'grateful', 'thankful', 'appreciate', 'blessed'],
      emotion: 'Grateful',
      color: 'from-pink-400 to-rose-500',
      insights: [
        'Gratitude shifts our perspective toward abundance',
        'Acknowledging what we appreciate deepens happiness',
        'Love and gratitude are healing emotions'
      ]
    }
  ];

  static async analyzeEmotion(text: string): Promise<EmotionAnalysis> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));

    const lowercaseText = text.toLowerCase();
    
    // Find matching emotion based on keywords
    let matchedEmotion = this.emotions.find(emotionData => 
      emotionData.keywords.some(keyword => lowercaseText.includes(keyword))
    );

    // Default to a neutral emotion if no keywords match
    if (!matchedEmotion) {
      matchedEmotion = {
        emotion: 'Reflective',
        color: 'from-indigo-400 to-cyan-500',
        insights: [
          'Taking time to reflect shows emotional awareness',
          'Every emotion provides valuable information',
          'Self-reflection is a path to personal growth'
        ],
        keywords: []
      };
    }

    // Generate a realistic confidence score
    const baseConfidence = 0.75;
    const variance = Math.random() * 0.2; // ±0.1
    const confidence = Math.min(0.95, Math.max(0.6, baseConfidence + variance));

    return {
      emotion: matchedEmotion.emotion,
      confidence: Math.round(confidence * 100) / 100,
      insights: matchedEmotion.insights,
      color: matchedEmotion.color
    };
  }
}
