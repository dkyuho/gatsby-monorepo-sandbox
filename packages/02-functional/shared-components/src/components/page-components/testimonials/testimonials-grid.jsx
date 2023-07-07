import React, { useState, useRef } from 'react'
import { Wrapper, staticQueryTestimonials, isNotEmptyArray } from 'base-components'
import { tstGridWrapperStyles, TestimonialsCard, TestimonialsCardModal } from 'shared-components'

const TestimonialsGrid = () => {
  const testimonialsJson = staticQueryTestimonials()
  const testimonials = JSON.parse(testimonialsJson.internal.content)
  const [modalShowed, setModalShowed] = useState(false)
  const testimonialCardRef = useRef('')

  const closeModal = () => {
    setModalShowed(false)
  }

  const handleCardClick = (object) => {
    testimonialCardRef.current = { ...object }
    setModalShowed(true)
  }

  return (
    isNotEmptyArray(testimonials) && (
      <Wrapper wrapperCustom={tstGridWrapperStyles}>
        {testimonials.map((testimonial) => (
          <TestimonialsCard handleCardClick={handleCardClick} testimonial={testimonial} key={testimonial.id} isModal />
        ))}
        <TestimonialsCardModal
          modalShowed={modalShowed}
          closeModal={closeModal}
          testimonialCardRef={testimonialCardRef}
          testimonials={testimonials}
        />
      </Wrapper>
    )
  )
}

export default TestimonialsGrid
