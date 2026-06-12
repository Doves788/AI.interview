import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App';
import Step3Report from '../components/Step3Report';

function InterviewReport() {
  const { id } = useParams()
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/report/" + id, { withCredentials: true })
        setReport(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReport()
  }, [id])

  if (!report) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center">
        <p className="text-white text-lg">
          Loading Report...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f]">
      <Step3Report report={report} />
    </div>
  )
}

export default InterviewReport