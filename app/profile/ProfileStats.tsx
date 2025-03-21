export default function ProfileStats() {
    const stats = [
      {
        title: "Attendance",
        details: [
          { label: "Total Classes", value: 145 },
          { label: "Attended", value: 120, color: "text-green-600" },
          { label: "Unattempted", value: 125 },
          { label: "Missed", value: 25, color: "text-red-600" },
        ],
      },
      {
        title: "Quiz",
        details: [
          { label: "Total Quizzes", value: 245 },
          { label: "Attempted", value: 120 },
          { label: "Unattempted", value: 125 },
          { label: "Passed", value: 25, color: "text-green-600" },
          { label: "Failed", value: 25, color: "text-red-600" },
        ],
      },
      {
        title: "Assignment",
        details: [
          { label: "Total Assignment", value: 245 },
          { label: "Attempted", value: 120 },
          { label: "Unattempted", value: 125 },
          { label: "Passed", value: 25, color: "text-green-600" },
          { label: "Failed", value: 25, color: "text-red-600" },
        ],
      },
    ];
  
    return (
      <div className="grid grid-cols-3 gap-6 mt-6">
        {stats.map((stat) => (
          <div key={stat.title} className="border p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            {stat.details.map((item) => (
              <p key={item.label} className={`${item.color || "text-gray-700"}`}>
                {item.label}: {item.value}
              </p>
            ))}
            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md">
              View Details
            </button>
          </div>
        ))}
      </div>
    );
  }
  