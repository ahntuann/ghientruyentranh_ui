import classNames from 'classnames/bind';

import style from './MangaDetail.module.scss';
import Button from '~/components/Button';

const cs = classNames.bind(style);

function MangaDetail({ classList }) {
    return (
        <div className={cs('wrapper', { [classList]: true })}>
            <div className={cs('manga-info')}>
                <div className={cs('manga-name')}>Mao Sơn tróc quỷ nhân</div>

                <div className={cs('manga-type')}>Tu tiên</div>

                <div className={cs('manga-des')}>
                    Diệp Thiếu Dương vốn là một Mao Sơn tróc quỷ nhân, dũng cảm tiến vào đô thị, gặp người đấu người,
                    gặp quỷ đấu quỷ, gặp yêu đấu yêu, gặp hồ đấu hồ... Tương tây Thi vương, Tà Thần bất tử, điệp tiên
                    hung linh, tứ phương quỷ khấu. Nữ minh tinh nuôi tiểu quỷ, công chúa hoàng thất hút máu, nữ giám đốc
                    là hồ yêu,... Thi triển Mao Sơn thần thuật, đánh lui tất cả!
                </div>
            </div>

            <div className={cs('manga-action')}>
                <Button solid title={'Đọc'} />
                <Button light title={'Thông tin khác'} />
            </div>
        </div>
    );
}

export default MangaDetail;
