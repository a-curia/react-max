import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {

  const data = useActionData()


    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>

          {data && data.error && <p>{data.error}</p>}
        </Form>
      </div>
    )
  }


export async function contactAction({ request }) {

  const formData = await request.formData()

  const submission = {
    email: formData.get('email'),
    message: formData.get('message')
  }

  console.log(submission) 
  
  // send post request to the server which might come back with error
  if (submission.message.length < 10) {
    return {error:"Message must be over 10 characters long!"}
  }

  // return redirect
  return redirect('/')
}
