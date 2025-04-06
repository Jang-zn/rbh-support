import React, { useState } from 'react';
import { useRestaurantStore } from '../store/restaurantStore';
import './RestaurantForm.css';

const RestaurantForm = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [amount, setAmount] = useState('');
  const [person, setPerson] = useState('');
  
  const addEntry = useRestaurantStore((state) => state.addEntry);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!restaurantName.trim() || !amount.trim() || !person.trim()) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    
    addEntry({
      restaurantName,
      amount,
      person
    });
    
    // 입력 폼 초기화
    setRestaurantName('');
    setAmount('');
    setPerson('');
  };
  
  return (
    <div className="restaurant-form-container">
      <h2>식당 방문 기록 입력</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="restaurantName">식당 이름</label>
          <input
            type="text"
            id="restaurantName"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="식당 이름을 입력하세요"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">사용 금액</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="사용 금액을 입력하세요"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="person">사용자</label>
          <input
            type="text"
            id="person"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            placeholder="사용자 이름을 입력하세요"
          />
        </div>
        
        <button type="submit" className="submit-button">등록하기</button>
      </form>
    </div>
  );
};

export default RestaurantForm; 