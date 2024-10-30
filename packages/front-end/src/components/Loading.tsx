import { useContext } from 'react'
import { globalContext } from '../contexts/globalContext'
import { getLoadingImg } from '../utils/assets'

export const Loading = () => {
  const gc = useContext(globalContext.Context)

  return (
    <div
      style={{
        display: gc.showLoading ? 'block' : 'none',
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            width: '72.85%',
            maxWidth: '1224px',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-59.5%)',
          }}
        >
          <img
            src={getLoadingImg(gc.language)}
            alt="loading"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
