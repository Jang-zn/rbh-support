import React from 'react';
import { useRestaurantStore } from '../store/restaurantStore';
import * as XLSX from 'xlsx';
import './RestaurantHistory.css';

const RestaurantHistory = () => {
  const entries = useRestaurantStore((state) => state.entries);

  const exportToExcel = () => {
    if (entries.length === 0) {
      alert('내보낼 데이터가 없습니다.');
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(entries);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '식당방문기록');
    
    // 파일 이름 설정
    const fileName = `식당방문기록_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`;
    
    // 파일 다운로드
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="restaurant-history-container">
      <div className="history-header">
        <h2>방문 기록</h2>
        <button onClick={exportToExcel} className="export-button">
          엑셀 다운로드
        </button>
      </div>

      {entries.length === 0 ? (
        <p className="no-data">등록된 방문 기록이 없습니다.</p>
      ) : (
        <div className="history-table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>날짜</th>
                <th>식당 이름</th>
                <th>사용 금액</th>
                <th>사용자</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td>{entry.restaurantName}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.person}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RestaurantHistory; 