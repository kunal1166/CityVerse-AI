import Card from "../ui/Card";
import {
  Smile,
  Meh,
  Frown,
} from "lucide-react";

const sentiment = [
  {
    mood: "Positive",
    percent: "72%",
    icon: Smile,
    color: "text-green-400",
  },
  {
    mood: "Neutral",
    percent: "19%",
    icon: Meh,
    color: "text-yellow-400",
  },
  {
    mood: "Negative",
    percent: "9%",
    icon: Frown,
    color: "text-red-400",
  },
];

export default function CitizenSentiment() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Citizen Sentiment
      </h2>

      <div className="space-y-4">
        {sentiment.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.mood}
              className="flex items-center justify-between rounded-xl border border-slate-700 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={item.color}
                  size={22}
                />

                <span className="text-white">
                  {item.mood}
                </span>
              </div>

              <span className={item.color}>
                {item.percent}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}