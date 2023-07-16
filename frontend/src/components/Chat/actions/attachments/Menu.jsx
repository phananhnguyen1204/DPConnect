import {
  CameraIcon,
  ContactIcon,
  DocumentIcon,
  PhotoIcon,
  PollIcon,
  StickerIcon,
} from "../../../../svg";

function Menu() {
  return (
    <ul className="absolute bottom-14 openEmojiAnimation">
      <li>
        <button type="button" className="rounded-full">
          <PollIcon></PollIcon>
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#0EABF4]">
          <ContactIcon></ContactIcon>
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#5F66CD]">
          <DocumentIcon></DocumentIcon>
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#D3396D]">
          <CameraIcon></CameraIcon>
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full]">
          <StickerIcon></StickerIcon>
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#BF59CF]">
          <PhotoIcon></PhotoIcon>
        </button>
      </li>
    </ul>
  );
}

export default Menu;
