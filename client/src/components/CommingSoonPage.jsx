import React from 'react'
import '../index.css'
function CommingSoonPage() {
    return (
        <section className="container">
            <div className="clock_content">
                <h1>We are almost there</h1>
                <h3>Stay tuned for something amazing.</h3>
                <button className="button" onClick={() => {
                    alert("You Will Get Notified When The Feature Is Available")
                }}>
                    Notify Me
                </button>
            </div>
        </section>
    )
}

export default CommingSoonPage