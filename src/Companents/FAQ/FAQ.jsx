import React from 'react'
import './FAQ.scss'

const FAQ = () => {

  const faqs = [
    {  
      question: "What type of meat do you use in your burgers?",
      answer: "We use only fresh, never-frozen beef that's handcrafted and cooked to perfection on a flat-top grill."
    },
    {  
        question: "Do you have any vegetarian or vegan options?",
        answer: "Yes, we offer several vegetarian and vegan options that are just as tasty and satisfying as our meat-based burgers. Check out our menu for more information."
      },
      {  
        question: "Are your buns gluten-free?",
        answer: "Unfortunately, our buns are not currently gluten-free. However, we do offer a lettuce wrap option for those who prefer a gluten-free burger."
      },
      {  
        question: "Can I place an order for pickup or delivery?",
        answer: "Yes, we offer both pickup and delivery options. Check out above or give us a call to place your order."
      },
      {  
        question: " What are your hours of operation?",
        answer: "Our hours of operation vary depending on the location. Check out our website or give us a call to find out the hours of the burger joint nearest you."
      },
  ];

  return (
    <div className='accordion'>
        <h2 className='accordion__title'>FAQS</h2>
        <div className='accordionFaq'>
            {faqs.map((item, index) => (
                <div key={index} className="faq">
                    <h4 className='question'>{item.question}</h4>
                    <p className='answer'>{item.answer}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FAQ