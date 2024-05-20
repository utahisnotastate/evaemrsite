import React, { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import recordappointment from './assets/recordappointment.png'
import cleanedtranscript from './assets/cleanedtranscript.png'
import doctorslogic from './assets/doctorslogic.png'
import generatenote from './assets/generatenote.png'
import generateclaim from './assets/generateclaim.png'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navbar/>
          <div className={`hero`}>
          </div>
          <div className="content-section">
              <div className="text-box">
                  <h2>Patient Request Tracking</h2>
                  <p>Most EMRs don't allow you to track patient requests. EVA EMR solves that by letting you open up
                      requests similar to tickets and track all interactions with a patient issue. </p>

              </div>
              <div className="text-box">
                  <h2>Patient Scheduling</h2>
                  <p>Allows you to schedule patients, but don't feel obligated to switch EMRs </p>
                  <p>We get it. Changing EMR software can be a huge hassle. We make it easy by focusing on our major
                      feature which is AI powered dictation. Just let your doctors do the dictation for you, and print
                      out the notes to be uploaded to your EMR of choice.</p>
              </div>
              <div className="text-box">
                  <h2>AI powered Dictation</h2>
                  <p>Medical providers don't have time to learn an EMR system. </p>
                  <p>EVA EMR allows providers to simply record a medical appointment via a microphone on their mobile
                      device or desktop computer and automatically dictates it, then uses machine learning to convert
                      the audio into the perfect office note and claim form.</p>
              </div>
              <div className="text-box">
                  <h2>Propietary/Custom AI Model</h2>
                  <p>Trained off medical appointment data, using a genius hack. Editing clips from medical reality shows
                      (Untold stores of the ER for example) and editing the video so that it only shows medical
                      appointment video. We also train from medical schol textbooks as well, which is a world first.
                      There is a fairly lengthy involved process to get from tv episode to medical appointment data
                      which is described below.</p>

              </div>
              <div className="text-box">
                  <h2>Public open-source dataset</h2>
                  <p>The data that EVA EMR was trained on will be made publically available for other
                      companies/developers</p>
                  <p>Our goal is for all healthcare software companies to show off the capabilities of their AI by using
                      our dataset as a benchmark to compete with others. </p>
              </div>
          </div>
          <h1>From Dictation to Office Note and Claim</h1>
          <div className="process-section">
              <div className="step">
                  <h3>Record Appointment or Dictated Notes and generate a rough audio transcript</h3>
                  <p>Convert audio from important into text via Speech To Text trained on Medical
                      Terms/Concepts/textbooks</p>
              </div>
              <div className={`arrow-down`}/>
              <div className="step">
                  <h3>Clean up the audio text by identifying all speakers</h3>
                  <p>  Using an AI with a knowledge base consisting of medical school textbooks, undergraduate textbooks, and other healthcare data sources, use an AI to determine the logic of the provider. </p>
              </div>
              <div className={`arrow-down`}/>
              <div className="step">
                  <h3>Determine Doctors Logic from AI model trained on: undergraduate textbooks, medical school textbooks. and other healthcare data sources.</h3>
                  <p>This is for doctors to go back and read through to see if the final office note is correct</p>
              </div>
              <div className={`arrow-down`}/>
              <div className="step">
                  <h3>Create Office Note</h3>
                  <p>Trained on medical school textbooks and reality medical shows and Medical Billing/Coding
                      certification information</p>
              </div>
              <div className={`arrow-down`}/>
              <div className="step">
                  <h3>Create Claim</h3>
                  <p>Create a paper claim trained on Medical Billing/Coding certification documents for you to send for
                      payment or included in an electronic claim.</p>
              </div>
          </div>
          <h1>Example</h1>
          <div className="process-section">
              <div className="step">
                  <h3>Get Audio Recording for Appointment</h3>
                  <p>Recording audio via a microphone can be tricky. That's why EVA EMR is specifically trained to edit out recording problems like enviromental noise</p>
                  <p>This dataset can be used to benchmark how well the AI can identify what is necessary to remove from an audio transcript. </p>
                  <img src={recordappointment} alt={`Record Appointment`} className={`responsive-image`}/>
              </div>

              <div className="step">
                  <h3>Identify speakers during a medical appointment</h3>
                  <p>This dataset is one of the most important datasets in creating a benchmark for speaker diurization. AI Models can compete on who can identify each speaker the most accurately. </p>
                  <div style={{display: 'flex', flexDirection: 'row'}}>
                      <img alt={`Cleaned Transcript`} className={`responsive-image`} src={cleanedtranscript} />
                      <div>

                      </div>
                  </div>
              </div>

              <div className="step">
                  <h3>Determine Doctor's Logic</h3>
                  <p>This is great for QA as well as helpful for doctors as to why its dictated. Typically not seen by providers</p>
                  <img alt={`Doctor's Logic`} className={`responsive-image`} src={doctorslogic} />
              </div>

              <div className="step">
                  <h3>Create Office Note</h3>
                  <p>Trained on medical school textbooks and reality medical shows and Medical Billing/Coding
                      certification information</p>
                  <img alt={`Generate Office Note`} className={`responsive-image`} src={generatenote} />
              </div>

              <div className="step">
                  <h3>Create Claim</h3>
                  <p>Create a paper claim trained on Medical Billing/Coding certification documents for you to send for
                      payment or included in an electronic claim.</p>
                  <img alt={`Generate Claim`} className={`responsive-image`} src={generateclaim} />
              </div>
          </div>
      </>
  )
}

export default App
