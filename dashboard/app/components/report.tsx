"use client";
import React from "react";
import { FaDownload } from "react-icons/fa";

const ReportsHeader = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white shadow-md rounded-lg p-6">
            {/* Title */}
            <div className="mb-4 lg:mb-0">
                <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
                {/* Timeframe Filter */}
                <div className="flex flex-col">
                    <label htmlFor="timeframe" className="text-sm font-medium text-gray-600">
                        Timeframe
                    </label>
                    <select
                        id="timeframe"
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                    >
                        <option value="all-time">All-time</option>
                        <option value="last-month">Last Month</option>
                        <option value="last-week">Last Week</option>
                    </select>
                </div>

                {/* People Filter */}
                <div className="flex flex-col">
                    <label htmlFor="people" className="text-sm font-medium text-gray-600">
                        People
                    </label>
                    <select
                        id="people"
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                    >
                        <option value="all">All</option>
                        <option value="admins">Admins</option>
                        <option value="managers">Managers</option>
                    </select>
                </div>

                {/* Topic Filter */}
                <div className="flex flex-col">
                    <label htmlFor="topic" className="text-sm font-medium text-gray-600">
                        Topic
                    </label>
                    <select
                        id="topic"
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                    >
                        <option value="all">All</option>
                        <option value="cyber-security">Cyber Security</option>
                        <option value="food-safety">Food Safety</option>
                    </select>
                </div>

                {/* Download Button */}
                <div>
                    <button
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                        onClick={handleDownload}
                    >
                        <FaDownload className="mr-2" />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

const handleDownload = async () => {
    // Example: Fetch from API and download logic
    try {
        const fileUrl = "https://drive.google.com/uc?export=download&id=1wupeSi5yWlATGH6iztlmDfHkGGIM3-u3";

        // Fetch the JSON file
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch JSON file.");
        }
        const data = await response.json();

        // Access the data you need from the JSON
        console.log(data);

        const apiSecret = data.api_secret;

        const downloadResponse = await fetch(
            "https://testd5-img.azurewebsites.net/api/imgdownload",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ api: apiSecret }),
            }
        );

        const result = await downloadResponse.json();
        const imageBase64 = result.image; // Assume image is returned as base64

        // Create download link
        const link = document.createElement("a");
        link.href = `data:image/png;base64,${imageBase64}`;
        link.download = "downloaded-report.png";
        link.click();
    } catch (error) {
        console.error("Error downloading file:", error);
    }
};

export default ReportsHeader;
