interface Props {
  modalName: string;
}

const GetStartedModal = ({modalName}: Props) => {
  return (
    <>
      <input type="checkbox" id={modalName} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor={modalName} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold uppercase">Get Started</h3>
          <p className="pt-4 text-xl">
            For questions or more information, please contact any of the following Grand Rapids Caduceus members below: 
          </p>
          <ul className='py-4'>
            <li>Jeff Kommit - 616-402-1571</li>
            <li>Bill Russell - 616-822-4557</li>
            <li>Dave Edgar - 616-308-7377</li>
            <li>Lisa Hoekstra Jansen - 616-485-6717</li>
            <li>Connie Kuper - 616-405-9344</li>
            <li>Michele Moore - 616-821-2599</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default GetStartedModal