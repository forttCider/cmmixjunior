export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Company Name */}
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-primary mb-7">CM MIX JUNIOR</h3>
        </div>
        <div className="flex flex-wrap gap-x-36 gap-y-8">
          {/* Contact Info */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold mb-4 text-secondary">
              연락처
            </h4>

            <div>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <span>전화: 02-2088-5754</span>
              </p>
              {/* <p className="text-sm text-gray-300 flex items-center gap-2">
                <span>
                  이메일:&nbsp;
                  <a
                    href="mailto:contact@cidermics.com"
                    className="hover:text-primary transition-colors break-all"
                  >
                    contact@cidermics.com
                  </a>
                </span>
              </p> */}
            </div>
          </div>

          {/* Address */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold mb-4 text-secondary">주소</h4>
            <address className="text-sm text-gray-300 not-italic break-keep">
              서울특별시 강남구 테헤란로 33길 13-3 (EMC타워) 3층
              <br />
              13-3, Teheran-ro 33-gil, Gangnam-gu, Seoul (06141)
            </address>
          </div>

          {/* Business Info */}
          {/* <div className="min-w-0">
            <h4 className="text-sm font-semibold mb-4 text-secondary">
              사업자 정보
            </h4>
            <div>
              <p className="text-sm text-gray-300 wrap-break-words flex items-center gap-2">
                <span>대표: 김의현</span>
                <span>개인정보책임: 김의현</span>
              </p>
              <p className="text-sm text-gray-300 wrap-break-words flex items-center gap-2">
                <span>사업자등록번호: 568-81-00920</span>
                <span>통신판매업 제2018-서울강남-03824호</span>
              </p>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
      </div>
      <div className="w-full border-t border-gray-600 py-8">
        <p className="mx-auto max-w-7xl text-sm text-gray-400 wrap-break-words px-4 sm:px-6 lg:px-8">
          Copyright &copy; 2025 CM-MIX-JUNIOR. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
