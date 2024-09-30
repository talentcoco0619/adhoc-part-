import React, { createContext, useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ReactLoading from 'react-loading'
import BucketsBox from './BusketsBox'
import ProductDialog from '../../components/ProductDialog/ProductDialog'
import { useContext } from 'react'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import { Button } from '../../common'

const dots = Array.from({ length: 10 }, (_, i) => i + 1)
const MAX_LENGTH = 150

export const settings_bucket = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  customPaging: (i) => {
    return <button>{dots[i]}</button>
  },
  appendDots: (dots) => {
    return <ul>{dots.slice(0, 6)}</ul>
  },
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1.5,
        initialSlide: 1.5,
      },
    },
  ],
}

const SubCategory = ({ category, handleSelectCategory }) => {
  const imageUrl = getProductCategoryImg(category)
  return (
    <div
      className="w-full cursor-pointer border border-gray-200 bg-white rounded-[10px] shadow p-[10px] flex flex-col justify-center mt-[10px]"
      onClick={() => handleSelectCategory(category)}
    >
      {category.Description && category.Description.length > MAX_LENGTH && (
        <h3
          className="font-bold text-[1rem]"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '1',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {category.Name}
        </h3>
      )}
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between h-full">
          {(!category.Description ||
            category.Description.length <= MAX_LENGTH) && (
            <h3
              className="font-bold text-[1.3rem] pr-[10px]"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: category.Description ? '1' : '3',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {category.Name}
            </h3>
          )}
          <p
            className="text-[0.85rem] pr-[10px] text-ellipsis"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '4',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {category.Description?.replace(/<[^>]+>/g, '')}
          </p>
        </div>
        {imageUrl && (
          <div className="relative w-[80px] h-[80px]">
            <img
              src={imageUrl}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export const getProductImage = (product) => {
  return product?.ImageUrl ? product?.ImageUrl : null
}

const getProductCategoryImg = (category) => {
  if (category?.ImageUrl) {
    return category?.ImageUrl
  }

  for (let i = 0; i < category?.Items.length; i++) {
    const result = getProductCategoryImg(category?.Items[i])
    if (result) return result
  }

  return null
}

const mapMenuItems = (menuItems, parentCategory, handleSelectCategory) => {
  let includeSubCategory = false
  const itemCategories = menuItems?.filter(
    (menuItem) =>
      menuItem.IsCategory &&
      !menuItem.Items.some((x) => x.IsCategory) &&
      menuItem.Items.length > 0
  )
  let subCategories = menuItems?.filter(
    (menuItem) =>
      menuItem.IsCategory &&
      menuItem.Items.some((x) => x.IsCategory) &&
      menuItem.Items.length > 0
  )

  if (subCategories && subCategories.length > 0) {
    includeSubCategory = true
    subCategories = [...subCategories, ...itemCategories]
  }

  const items = menuItems?.filter((menuItem) => !menuItem.IsCategory)
  const categoryName = parentCategory ? parentCategory.Name : ' '
  const catId = parentCategory ? parentCategory.ID : '#'
  return (
    <>
      {includeSubCategory ? (
        subCategories &&
        subCategories.map((subCategory, idx) => (
          <SubCategory
            key={idx}
            category={subCategory}
            handleSelectCategory={handleSelectCategory}
          />
        ))
      ) : (
        <>
          <h2 className="text-[1.5rem] font-extrabold mt-[20px]" id={catId}>
            {categoryName}
          </h2>
          {itemCategories &&
            itemCategories.length > 0 &&
            (itemCategories.length > 2 ? (
              <Slider {...settings_bucket} className="mb-[20px]">
                {itemCategories.map((category, idx) => (
                  <ProductCategoryItem
                    imgSrc={getProductCategoryImg(category)}
                    key={`${idx}_main`}
                    categoryId={category.ID}
                    categoryName={category.Name}
                  />
                ))}
              </Slider>
            ) : (
              <div className="flex items-center justify-center">
                {itemCategories.map((category, idx) => (
                  <ProductCategoryItem
                    className="w-[150px] h-[150px]"
                    imgSrc={getProductCategoryImg(category)}
                    key={`${idx}_main`}
                    categoryId={category.ID}
                    categoryName={category.Name}
                  />
                ))}
              </div>
            ))}
          {items && mapItems(items, parentCategory)}
          {itemCategories &&
            itemCategories.map((category, idx) => (
              <React.Fragment key={idx}>
                {mapMenuItems(category.Items, category)}
              </React.Fragment>
            ))}
        </>
      )}
    </>
  )
}

const mapItems = (items, parentCategory) => {
  return (
    <React.Fragment key={parentCategory ? parentCategory.ID : '#'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px]">
        {items.map((x) => mapItem(x))}
      </div>
    </React.Fragment>
  )
}

const mapItem = (product) => {
  return <BucketsBox key={product.ID} product={product} unit={'RON'} />
}

const ProductCategoryItem = ({
  className = '',
  imgSrc,
  categoryId,
  categoryName,
  description,
}) => {
  const handleGotoCategory = () => {
    const element = document.getElementById(categoryId)
    element.scrollIntoView()
  }
  return (
    <div
      className={`bg-white rounded-[10px] border border-gray-100 shadow-md my-[15px] mx-[10px] relative ${
        className ? className : 'aspect-w-1 aspect-h-1'
      }`}
      onClick={handleGotoCategory}
    >
      <div className="absolute inset-0 pt-[5px] px-[5px]">
        <div className="relative w-full h-[calc(100%_-_40px)]">
          {imgSrc && (
            <img
              src={imgSrc}
              alt="product image kfc"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[5px]"
            />
          )}
        </div>
        <div className="h-[40px] w-full flex items-center flex-col justify-center">
          <h3
            className="text-center font-semibold text-[12px]"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {categoryName}
          </h3>
        </div>
      </div>
    </div>
  )
}

export const ProductContext = createContext()

const ProductCategory = ({ restId }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { data, setData, product, setProduct, showDialog, setShowDialog } =
    useContext(ProductBusketContext)

  const [currentCategory, setCurrentCategory] = useState({})

  useEffect(() => {
    if (restId) {
      setIsLoading(true)
      // console.log('Here is fe Coco!!!')
      fetch(`/api/syncProducts/${restId}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.Items)
          setCurrentCategory(data)
          setIsLoading(false)
        })
    }
  }, [restId, setIsLoading])

  const handleSelectCategory = (category) => {
    setCurrentCategory(category)
  }

  const findCategoryById = (root, id) => {
    for (let i = 0; i < root.length; i++) {
      if (root[i].ID === id) return root[i]
      else if (root[i].IsCategory) {
        const result = findCategoryById(root[i].Items, id)
        if (result) return result
      }
    }
    return null
  }

  const handleBackCategory = () => {
    const parentId = currentCategory.ParentID
    const parentCategory = findCategoryById(data, parentId)
    if (parentCategory) {
      setCurrentCategory(parentCategory)
    } else {
      setCurrentCategory({
        Items: data,
      })
    }
  }

  return (
    <div className="pt-[20px]">
      <ProductContext.Provider
        value={{
          setProduct,
          setShowDialog,
        }}
      >
        {isLoading ? (
          <div className="flex flex-col justify-center items-center font-bold p-[30px]">
            <ReactLoading type="spinningBubbles" color="#ffb800" />
            Loading
          </div>
        ) : (
          <>
            {currentCategory.Name && (
              <Button
                text="Back"
                variant="outline"
                onClick={handleBackCategory}
                className="py-[5px] px-[10px]"
              />
            )}
            {mapMenuItems(
              currentCategory.Items,
              currentCategory.Name,
              handleSelectCategory
            )}
          </>
        )}
        {product && (
          <ProductDialog
            show={showDialog}
            setShow={setShowDialog}
            product={product}
          />
        )}
      </ProductContext.Provider>
    </div>
  )
}

export default ProductCategory
