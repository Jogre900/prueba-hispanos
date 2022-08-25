import { useState } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const ownStyles = {
  pageContainers: {
    padding: '.8rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#ffff',
    boxShadow: '0 0 .5rem 0 #ccc',
    marginBottom: '1.6rem',
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

const defaultList = [
  {
    id: '1',
    name: 'header',
  },
  {
    id: '2',
    name: 'slider',
  },
  {
    id: '3',
    name: 'features',
  },
  {
    id: '4',
    name: 'content1',
  },
]

const Header = ({ item, removeAction }) => {
  return (
    <div style={ownStyles.pageContainers}>
      <h2>Header</h2>
      {item.inDesign && <button onClick={removeAction}>Quitar!</button>}
      <section>
        <form>
          <input type='text' placeholder='Logo' />
          <input type='text' placeholder='Title' />
          <input type='text' placeholder='Subtitle' />
          <input type='text' placeholder='img url' />
        </form>
      </section>
    </div>
  )
}

const Features = () => {
  return (
    <div style={ownStyles.pageContainers}>
      <h2>Features 1</h2>
      <section style={ownStyles.slider}>
        <form>
          <textarea
            name='feature1'
            id='feature1'
            cols='30'
            rows='10'
            placeholder='card 1'
          ></textarea>
          <textarea
            name='feature2'
            id='feature2'
            cols='30'
            rows='10'
            placeholder='card 2'
          ></textarea>
          <textarea
            name='feature3'
            id='feature3'
            cols='30'
            rows='10'
            placeholder='card 3'
          ></textarea>
        </form>
      </section>
    </div>
  )
}

const Content1 = () => {
  return (
    <div style={ownStyles.pageContainers}>
      <h2>Contenido tipo 1</h2>
      <section>
        <form>
          <input type='text' name='' id='' placeholder='title' />
          <input type='text' name='' id='' placeholder='subTitle' />
        </form>
      </section>
    </div>
  )
}

const Slider = ({ item, removeAction }) => {
  return (
    <div style={ownStyles.pageContainers}>
      <h2>Slider 1</h2>
      {item.inDesign && <button onClick={removeAction}>Quitar!</button>}
      <section>
        <form style={ownStyles.slider}>
          <textarea
            name='feature1'
            id='feature1'
            cols='30'
            rows='10'
            placeholder='sliderCard 1'
          ></textarea>
          <textarea
            name='feature2'
            id='feature2'
            cols='30'
            rows='10'
            placeholder='sliderCard 2'
          ></textarea>
          <textarea
            name='feature3'
            id='feature3'
            cols='30'
            rows='10'
            placeholder='sliderCard 3'
          ></textarea>
        </form>
      </section>
    </div>
  )
}

const DraggableItemList = ({ item, index, children }) => {
  return (
    <Draggable key={`${item.id}`} draggableId={item.id} index={index}>
      {(draggable) => {
        return (
          <li
            {...draggable.draggableProps}
            {...draggable.dragHandleProps}
            ref={draggable.innerRef}
          >
            {children}
          </li>
        )
      }}
    </Draggable>
  )
}

export default function Drag() {
  // React state to track order of items
  const [itemList, setItemList] = useState(defaultList)
  const [newUserList, setNewUserList] = useState([])

  // Function to update list on drop

  const handleRemoveFromDesign = (item) => {
    const newList = newUserList.filter((item) => item.id !== item.id)
    setItemList((prev) => [{ ...item, inDesign: false }, ...prev])
    setNewUserList(newList)
  }

  const onDragEndHandler = (droppedItem) => {
    const { source, destination } = droppedItem

    if (!destination) return
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return

    if (source.droppableId !== destination.droppableId) {
      if (source.droppableId === 'user-list') {
        const updatedList = [...itemList]
        // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)
        // Add dragged item to new list
        setItemList(updatedList)
        setNewUserList([...newUserList, { ...reorderedItem, inDesign: true }])
      } else {
        console.log('new-user-list')
        const updatedList = [...newUserList]
        // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)

        // Add dragged item to new list
        setNewUserList(updatedList)
        setItemList([...itemList, reorderedItem])
      }
    }

    if (source.droppableId === destination.droppableId) {
      if (destination.droppableId === 'new-user-list') {
        const updatedList = [...newUserList]
        //     // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)

        //     // Add dropped item
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem)
        // Update State
        setNewUserList(updatedList)
      } else {
        const updatedList = [...itemList]
        //     // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)

        //     // Add dropped item
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem)
        // Update State
        setItemList(updatedList)
      }
    }
  }

  return (
    <div className='App'>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '1.2rem',
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1140px',
          margin: '0 auto',
        }}
      >
        <DragDropContext onDragEnd={onDragEndHandler}>
          <Droppable droppableId='user-list'>
            {(provider) => (
              <ul
                style={{
                  listStyle: 'none',
                  padding: '1.2rem',
                  border: '.5px solid #ccc',
                  backgroundColor: '#ccc',
                  flex: 1,
                  width: '50%',
                }}
                {...provider.droppableProps}
                ref={provider.innerRef}
              >
                {itemList.map((item, i) => {
                  // return (
                  //   <DraggableItemList key={`${item.id}`} item={item} index={i}>
                  //     <span>{item.name}</span>
                  //   </DraggableItemList>
                  // )
                  if (item.id === '1') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Header item={item} />
                      </DraggableItemList>
                    )
                  }
                  if (item.id === '2') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Slider item={item} />
                      </DraggableItemList>
                    )
                  }
                  if (item.id === '3') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Features />
                      </DraggableItemList>
                    )
                  }
                  if (item.id === '4') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Content1 />
                      </DraggableItemList>
                    )
                  }
                })}
                {provider.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId='new-user-list'>
            {(provider) => (
              <ul
                ref={provider.innerRef}
                {...provider.droppableProps}
                style={{
                  backgroundColor: '#cc9fea',
                  border: '.5px solid #ccc',
                  minHeight: '25rem',
                  flex: 1,
                  width: '50%',

                  listStyle: 'none',
                  padding: '1.2rem',
                }}
              >
                {newUserList.map((item, i) => {
                  // return (
                  //   <DraggableItemList key={`${item.id}`} item={item} index={i}>
                  //     <span>{item.name}</span>
                  //   </DraggableItemList>
                  // )

                  if (item.id === '1') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Header
                          item={item}
                          removeAction={() => handleRemoveFromDesign(item)}
                        />
                      </DraggableItemList>
                    )
                  }
                  if (item.id === '2') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Slider
                          item={item}
                          removeAction={() => handleRemoveFromDesign(item)}
                        />
                      </DraggableItemList>
                    )
                  }
                  if (item.id === '3') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Features />
                      </DraggableItemList>
                    )
                  }
                  if (item.id === '4') {
                    return (
                      <DraggableItemList
                        key={`${item.id}`}
                        item={item}
                        index={i}
                      >
                        <Content1 />
                      </DraggableItemList>
                    )
                  }
                })}
                {provider.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}
