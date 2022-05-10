import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This item is feedback item 2',
      rating: 7
    },
    {
      id: 3,
      text: 'This item is feedback item 3',
      rating: 9
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const updatedFeedbackArray = feedback.filter((item) => item.id !== id);
      setFeedback(updatedFeedbackArray);
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {  
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {
      ...item, ...updatedItem
    } : item))

    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext