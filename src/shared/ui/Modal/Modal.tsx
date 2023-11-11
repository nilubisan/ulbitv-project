import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { type MouseEvent, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const ANIMATION_DELAY = 300

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  }

  const closeHandler = useCallback(() => {
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeHandler()
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) setIsMounted(true)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onContentClick = (e: MouseEvent) => { e.stopPropagation() }

  if (lazy && !isMounted) return null

  return (
      <Portal>
        <div className={classNames(styles.Modal, mods, [className])}>
            <div className={styles.overlay} onClick={closeHandler}>
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
      </Portal>
  )
}
