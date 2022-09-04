import React from 'react';
import { Check, X } from 'lucide-react';

type InfoModalProps = {
  onClick: any;
  display: boolean;
  title: string;
  text: string;
  success: boolean;
};

function InfoModal({ onClick, display, title, text, success }: InfoModalProps) {
  return (
    <div
      className='relative z-10 bg-stone-300'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
      hidden={display ? false : true}
    >
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
          <div className='relative bg-stone-300 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
            <div className='bg-stone-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div
                  className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-${
                    success ? 'green' : 'red'
                  }-100 sm:mx-0 sm:h-10 sm:w-10`}
                >
                  {success ? (
                    <Check className='h-4 w-4 text-green-600' />
                  ) : (
                    <X className='h-4 w-4 text-red-600' />
                  )}
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3
                    className='text-lg leading-6 font-medium text-gray-900'
                    id='modal-title'
                  >
                    {title}
                  </h3>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>{text}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-stone-300 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <button
                type='button'
                onClick={onClick}
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
