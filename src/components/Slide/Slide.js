import React, { useState, useRef, useEffect } from 'react'

const Slide = ({ children, selectedIndex = 0, infinite = false }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [translateX, setTranslateX] = useState(0) // Used for handling the position of the slider
  const [order, setOrder] = useState(
    Array.from({ length: children.length }, (_, i) => i)
  )

  const slideRef = useRef(null)

  const slideWidth = slideRef.current
    ? slideRef.current.offsetWidth / children.length
    : 0

  useEffect(() => {
    // Adjust the initial position to the middle set of children for infinite sliding
    if (infinite) {
      setTranslateX(-slideWidth * children.length)
    }
  }, [slideWidth, children.length, infinite])

  const handleMouseDown = (e) => {
    // Prevent default touch actions.
    if (e.type === 'touchstart') {
      setIsDragging(true)
      setStartPos(e.touches[0].clientX - translateX)
    } else {
      setIsDragging(true)
      setStartPos(e.clientX - translateX)
    }

    slideRef.current.style.transition = 'none'
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return

    let currentPosition

    // Check if it's a touch event.
    if (e.type === 'touchmove') {
      currentPosition = e.touches[0].clientX
    } else {
      currentPosition = e.clientX
    }

    const diff = currentPosition - startPos
    setTranslateX(diff)
  }

  const moveToPrevious = () => {
    setOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)])
  }

  const moveToNext = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]])
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    slideRef.current.style.transition = 'transform 0.3s ease-out'

    // Update the order based on sliding direction
    if (translateX > slideWidth / 2) {
      moveToPrevious()
      setTranslateX(0)
    } else if (translateX < -slideWidth / 2) {
      moveToNext()
      setTranslateX(0)
    } else {
      setTranslateX(0)
    }
  }

  const preventImageDrag = (e) => {
    e.preventDefault()
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={slideRef}
        // Mouse events
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          if (isDragging) handleMouseUp()
        }}
        // Touch events
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        onTouchCancel={handleMouseUp}
        onDragStart={preventImageDrag}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 0.3s ease-out',
        }}
        className="flex select-none"
      >
        {[...Array(infinite ? 3 : 1)].map((_, cloneIndex) =>
          order.map((childIndex, index) => {
            const child = children[childIndex]
            // Check if the current child is the selected one
            const isZoomed = index === selectedIndex
            return (
              <div
                key={`clone-${cloneIndex}-child-${childIndex}`}
                className={`flex-none w-1/${
                  children.length
                } transform transition-transform duration-300 ease-in-out ${
                  isZoomed ? 'scale-100' : 'scale-90'
                }`}
              >
                {React.cloneElement(child, {
                  children: React.Children.map(
                    child.props.children,
                    (childChild) => {
                      if (childChild.type === 'img') {
                        return React.cloneElement(childChild, {
                          draggable: 'false',
                          style: {
                            userDrag: 'none',
                            ...childChild.props.style,
                          },
                        })
                      }
                      return childChild
                    }
                  ),
                })}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Slide
